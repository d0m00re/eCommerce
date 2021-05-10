import React, { ReactElement } from 'react'

import styled from "styled-components";
import newTheme, { StyledNavBar, StyledFlexRow, StyledBlockLayout}
    from './../../../Style/ThemeV2';

import { logo } from './../../../Data/card/index';

import {useSelector, useDispatch} from 'react-redux';

import GenButton from './../../Atoms/GenButton/GenButton';
import BasketReducer from '../../../Redux/reducers/Basket';

import IReducerBasket from './../../../Types/IReducerBasket';


import * as apiBasket from './../../../Redux/adapters/BasketAdapter';

const StyledLogo = styled.div` 
  & > a {
    & > img {
      width : 130px;
    }
  } 
`;

const StyleFlexboxSpaceEvenly = styled(StyledFlexRow) ` 
    justify-content : space-between;
`

const StyledMyBlockLayout = styled(StyledBlockLayout) ` 
    padding-top : 28px;
    padding-bottom : 28px;
`;

interface Props {

}


const StyledButtonContainer = styled.div ` 
`;

function Logo() {
    return (
        <StyledLogo>
            <a>
                <img src={logo} />
            </a>
        </StyledLogo>
    )
}

function NavBar({count} : {count : number}) {
    const dispatch = useDispatch();

    return (
        <StyledNavBar>
            <ul>
                <li>
                    <a href='#Home'>Home</a>
                </li>
                <li>
                    <a href='#About'>About</a>
                </li>
                <li>
                    <a href='#Store'>Store</a>
                </li>
                <li>
                    <a href='#Work'>Work</a>
                </li>
                <li>
                    <a href='#Pages'>Pages</a>
                </li>
                <li onClick={() => {apiBasket.show(dispatch)}}>
                    <a>Cart({count})</a>
                </li>
            </ul>
        </StyledNavBar>
    );
}

function totalArt(basket : IReducerBasket) {
    let tot = 0;

    for (let i = 0; i < basket.articlesList.length; i++){
        tot += basket.articlesList[i].count;
    }
    return tot;
}

function HeaderBar({ }: Props): ReactElement {
    const basket: IReducerBasket = useSelector((state: { basket: IReducerBasket }) => state.basket);
    return (
        <StyledMyBlockLayout>
            <StyleFlexboxSpaceEvenly>
                <Logo />
                <NavBar count={totalArt(basket)} />
                <StyledButtonContainer>
                    <GenButton text='Browse Gallerie' href='#gallerie' size='medium' />
                </StyledButtonContainer>
            </StyleFlexboxSpaceEvenly>
        </StyledMyBlockLayout>
    )
}

export default HeaderBar
 