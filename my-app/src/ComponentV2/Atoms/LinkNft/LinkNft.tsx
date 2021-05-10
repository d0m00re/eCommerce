import React, { ReactElement } from 'react'
import styled from "styled-components";

import Theme from './../../../Style/ThemeV2';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

interface Props {
    href : string
    underline ?: boolean
}

// redo later
const StyledLink = styled.a` 
    margin-top: 32px;
    display: inline-block;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;
    transition: color 350ms ease;



    &:hover {
        color : ${Theme.text.color};
    }

    & > div:nth-child(1) {
    
        &:hover {
            color : ${Theme.text.color};
        }
    };

    & > div:nth-child(2) {
        height : 2px;

       
    }
`;

function LinkNft({href, underline = true}: Props): ReactElement {
    return (
        <StyledLink>
            <Link to={href}>
            <div>View NFT</div>
            {
                underline === true && <div></div>
            }
            </Link>
        </StyledLink>
    )
}

export default LinkNft
