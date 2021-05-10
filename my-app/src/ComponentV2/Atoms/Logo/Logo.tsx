import React, { ReactElement } from 'react'

import styled from "styled-components";

import { logo } from './../../../Data/card/index';

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

function Logo() : ReactElement {
    return (
        <StyledLogo>
            <HashLink smooth to="/">
                <img src={logo} />
            </HashLink>
        </StyledLogo>
    );
}

export default Logo;