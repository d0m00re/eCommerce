import React, { ReactElement } from 'react'
import styled from "styled-components";
import theme from './../../../Style/Theme';
import { prependOnceListener } from 'cluster';
//    background-color : ${props => props.contextMenu.primary.button};

export interface IButtonProps {
    onClick : () => void,
    variant ?: string,//'primary' | 'secondary'
    disabled ?: boolean;
    children ?: JSX.Element | string | undefined;
}


let color = 'green'

/*
const StyledButtonPrimary = styled.button<IButtonProps>`
    background-color : ${props => (props.variant==='primary') ? theme.button.primary.backgroundColor : theme.button.secondary.backgroundColor};
    color : ${(variant === 'primary') ? theme.button.primary.color : theme.button.secondary.color};
    padding : 26px 72px;
`;
*/

const StyledButtonPrimary = styled.button<IButtonProps>`
    background-color : ${props => (props.variant==='primary') ? theme.button.primary.backgroundColor : theme.button.secondary.backgroundColor};
    color : ${props => (props.variant === 'primary') ? theme.button.primary.color : theme.button.secondary.color};
    padding : 26px 72px;
`;

/*
const StyledButton = styled.button`
    background-color : ${props : {primary : string} => (props.primary) ?  theme.button.primary.color : theme.button.secondary.color} ,
color : ${(true) ? theme.button.primary.color : theme.button.secondary.color};
`;
*/


function ButtonPrimary({children, onClick, variant = 'primary', disabled = false}: IButtonProps): ReactElement {
    return (
        <StyledButtonPrimary onClick={(disabled) ? () => {} : onClick} variant={variant}>
            {children}
        </StyledButtonPrimary>
    )
}

export default ButtonPrimary;
