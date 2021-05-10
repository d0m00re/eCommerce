import React, { ReactElement } from 'react';

import GenButton from './../../Atoms/GenButton/GenButton';
import styled from 'styled-components';

interface Props {
    totalPrice: number;

}

let StyledBottom = styled.div` 
        display : flex;
        flex-direction : column;
    & > div {
       display : flex;
       flex-direction : row;
       justify-content : space-aroud;
    }
`;

let StyledText = styled.div` 
color: #bebdd4;
font-size: 18px;
line-height: 30px;
font-weight: 400;
`;

function ModalBottom({ totalPrice }: Props): ReactElement {
    return (

        <StyledBottom>
            <div>
                <StyledText>Subtotal</StyledText>
                <StyledText>${totalPrice}</StyledText>
            </div>
            <GenButton size='big' href='/' onClick={() => { }} text='Continue To Checkout' />
        </StyledBottom>
    )
};

export default ModalBottom;
