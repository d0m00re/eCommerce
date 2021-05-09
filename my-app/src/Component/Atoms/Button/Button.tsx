import React, { ReactElement } from 'react'
import styled from "styled-components";
import theme from './../../../Style/Theme';
//    background-color : ${props => props.contextMenu.primary.button};

export interface IButtonProps {
    onClick : () => void,
    variant ?: 'primary' | 'secondary';
    sizeElem ?: 'small' | 'medium' | 'big';
    form ?: 'rectangle' | 'circle';
    disabled ?: boolean;
    children ?: JSX.Element | string | undefined;
}

const StyledButtonPrimary = styled.button<IButtonProps>`
    background-color : ${props => (props.variant==='primary') ? theme.button.primary.backgroundColor : theme.button.secondary.backgroundColor};
    color : ${props => (props.variant === 'primary') ? theme.button.primary.color : theme.button.secondary.color};
    padding : ${props => (props.sizeElem === 'small') ? theme.button.size.small.padding.h : (props.sizeElem === 'medium') ? theme.button.size.medium.padding.h : theme.button.size.big.padding.h}px;
    border-radius : ${props => (props.form === 'rectangle') ? 0 : 50}%;
`;

/*
const StyledButton = styled.button`
    background-color : ${props : {primary : string} => (props.primary) ?  theme.button.primary.color : theme.button.secondary.color} ,
color : ${(true) ? theme.button.primary.color : theme.button.secondary.color};
`;
*/


function ButtonPrimary({children, onClick, variant = 'primary', disabled = false, sizeElem = 'big', form = 'rectangle'}: IButtonProps): ReactElement {
    return (
        <StyledButtonPrimary onClick={(disabled) ? () => {} : onClick} variant={variant} sizeElem={sizeElem} form={form}>
            {children}
        </StyledButtonPrimary>
    )
}

export default ButtonPrimary;
 