import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
 
import styled from 'styled-components';

import { StyledVerySmallTitle } from './../../../Style/ThemeV2';

import * as basketAdp from './../../../Redux/adapters/BasketAdapter';

interface Props {

}

let StyledHeader = styled.div`
    position : relative;
    padding-top: 26px;
    padding-bottom: 26px;
    border-bottom-color: #4e4b66;

    position: relative;
    display: flex;
    padding : 16px 24px;
    justify-content: space-between;

    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e6e6e6;
    align-items: center;
`;

function ModalBasket({ }: Props): ReactElement {
    const dispatch = useDispatch();

    return (
        <StyledHeader>
            <StyledVerySmallTitle>Your Cart</StyledVerySmallTitle>
            <button onClick={() => basketAdp.close(dispatch)}>x</button>
        </StyledHeader>

    )
}

export default ModalBasket
