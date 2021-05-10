import React, { ReactElement } from 'react'

import styled from "styled-components";
import newTheme, { StyledNavBar, StyledFlexRow, }
    from './../../../Style/ThemeV2';

import { logo } from './../../../Data/card/index';


import GenButton from './../../Atoms/GenButton/GenButton';

const StyledLogo = styled.div` 
  & > a {
    & > img {
      width : 130px;
    }
  } 
`;

interface Props {

}


function Logo() {
    return (
        <StyledLogo>
            <a>
                <img src={logo} />
            </a>
        </StyledLogo>
    )
}

function NavBar() {
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
            </ul>
        </StyledNavBar>
    );
}

function BasketSelector({ count }: { count: number }) {
    return (
        <a>Cart{count}</a>
    )
}

function HeaderBar({ }: Props): ReactElement {
    return (
        <>
            <StyledFlexRow>
                <Logo />
                <NavBar />
                <BasketSelector count={5} />
                <GenButton text='Browse Gallerie' href='#gallerie' size='medium' />
            </StyledFlexRow>
        </>
    )
}

export default HeaderBar
