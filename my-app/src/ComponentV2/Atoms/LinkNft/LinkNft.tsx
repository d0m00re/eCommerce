import React, { ReactElement } from 'react'
import styled from "styled-components";

import Theme from './../../../Style/ThemeV2';

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
        <StyledLink href={href}>
            <div>View NFT</div>
            {
                underline === true && <div></div>
            }
        </StyledLink>
    )
}

export default LinkNft
