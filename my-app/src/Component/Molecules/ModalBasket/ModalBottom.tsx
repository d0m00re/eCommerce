import React, { ReactElement } from 'react'
import Button from './../../../Component/Atoms/Button/Button';
import styled from "styled-components";

interface Props {
    onClose : () => ({})
}

const ContainerButton = styled.div `
    width : 100%;
    display : flex;
    justify-content : space-around;
    align-items : center;

`; 

function ModalBottom({onClose}: Props): ReactElement {


    return (
        <ContainerButton>
             <Button variant='primary' sizeElem='medium' onClick={onClose}>Continue</Button>
            <Button variant='secondary' sizeElem='medium' onClick={onClose}>Buy</Button>
        </ContainerButton>
    )
}

export default ModalBottom;