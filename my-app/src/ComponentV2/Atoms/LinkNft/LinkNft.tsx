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
/*
const StyledLink = styled.a` 
    margin-top: 32px;
    display: inline-block;
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    cursor: pointer;

    & > a { 
        text-decoration : none;
    }
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
        background-image: linear-gradient(90deg, #edb8ff, #6148ff);       
    }
    */
/*
*/


const StyledNft = styled.a ` 
display : inline-block;
transition: color 350ms ease;
    color: #0060B6;
    text-decoration: none;
    width : 74px;
    margin-top : 32px;
    transition: background-color 1s;
    & > a { 
        width : 74px;

        text-decoration : none;
        color: #fff;
    }

    & > div {
        margin-top : 8px;
        width : 74px;

        height : 2px;
        background-image: linear-gradient(100deg, grey, grey);       
        transition: background-color 1s;
    }

    &:hover {
        transition: background-color 1s;
    & > div {
        height : 2px;
        transition: color 350ms ease;
        background: rgba(255, 255, 255, 0.24);
    }    }


`;

function LinkNft({href, underline = true}: Props): ReactElement {
    return (
        <StyledNft>
            <Link to={href}>
                <div>View NFT</div>
            </Link>
            <div></div>
        </StyledNft>
    )
}

export default LinkNft
