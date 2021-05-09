import React, { ReactElement } from 'react'
import Button from './../../../Component/Atoms/Button/Button';
import styled, { keyframes } from "styled-components";

interface Props {
    onClose : () => ({})
}

const ContainerButton = styled.div `
    width : 100%;
    display : flex;
    justify-content : center;
    align-items : center;

`; 

function ModalBottom({onClose}: Props): ReactElement {


    return (
        <ContainerButton>
             <Button variant='primary' onClick={onClose}>Continue</Button>
            <Button variant='secondary' onClick={onClose}>Buy</Button>
        </ContainerButton>
    )
}

export default ModalBottom
 