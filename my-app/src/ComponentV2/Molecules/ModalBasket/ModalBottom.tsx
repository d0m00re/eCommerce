import React, { ReactElement } from 'react';

import GenButton from './../../Atoms/GenButton/GenButton';
import styled from 'styled-components';

interface Props {
    totalPrice: number;

}

/*
display : flex;
       flex-direction : row;
       justify-content : space-aroud;
*/
let StyledBottom = styled.div` 
        display : flex;
        flex-direction : column;
        padding : 24px 32px;

        border-top-style : solid;
        border-top-width : 1px;
        border-top-color: #e6e6e6;
`;

let StyledCtnText = styled.div ` 
    display : flex; 
    justify-content : space-between;   
    flex-direction : row;

    margin-bottom : 16px;
`

let StyledText = styled.div` 
color: #bebdd4;
font-size: 18px;
line-height: 30px;
font-weight: 400;
`;

let StyledText2 = styled.div` 
color: #fff;
font-size: 18px;
line-height: 30px;
font-weight: 700;
`;

function ModalBottom({ totalPrice }: Props): ReactElement {
    return (

        <StyledBottom>
            <StyledCtnText>
                <StyledText>Subtotal</StyledText>
                <StyledText2>${totalPrice} USD</StyledText2>
            </StyledCtnText>
            <GenButton size='small' href='/' onClick={() => { }} text='Continue To Checkout' />
        </StyledBottom>
    )
};

export default ModalBottom;
