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

import { HashLink } from 'react-router-hash-link';

const StyledLogo = styled.div` 
    transition: transform 350ms ease, -webkit-transform 350ms ease;
    &:hover {
        transform : scale(0.94);
        transition: transform 350ms ease, -webkit-transform 350ms ease;
    }
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
                    <HashLink smooth to="/">Home</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/page#about">About</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/page#store">Store</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/page#work">Work</HashLink>
                </li>
                <li>
                    <HashLink smooth to="/page#pages">Pages</HashLink>
                </li>
                <li onClick={() => {apiBasket.show(dispatch)}}>
                    <a>Card({count})</a>
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
                    <GenButton useDynamicAnchor text='Browse Gallerie' href='/page#store' size='medium'  />
                </StyledButtonContainer>
            </StyleFlexboxSpaceEvenly>
        </StyledMyBlockLayout>
    )
}

export default HeaderBar
 