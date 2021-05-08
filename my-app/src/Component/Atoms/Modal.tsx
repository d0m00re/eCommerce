import React, { ReactElement, useState, useEffect } from 'react'
import styled, {keyframes} from "styled-components";

// fade
const fade = keyframes`
  from {
    background-color: rgba(0, 0, 255, 0);
  }

  to {
    background-color: rgba(0, 0, 255, 0.78);

}
`;

// find how to pass props for opacity
const fade2 = keyframes`
  from {
    background-color: rgba(0, 0, 255, 0);
  }

  to {
    background-color: rgba(0, 0, 255, 1);

}
`;


const StyledModalContainer = styled.div` 
    position : absolute;
    width : 100vw;
    height : 100vh;

    animation-name : ${fade} ;
    animation-duration : 1s ;
    animation-fill-mode: forwards;
`

const StyledModal = styled.div`
    position: absolute;
    width : 200px;
    height : 200px;
    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    background-color : orange;

    animation-name : ${fade2} ;
    animation-duration : 1.5s ;
    animation-fill-mode: forwards;
`;

interface Props {
    show: boolean,
    onClose: () => any
}

function Modal({ show, onClose }: Props): ReactElement {

    const Modal = () =>
        <StyledModalContainer>
            <StyledModal>
                show modal
            <button onClick={onClose}>CLOSE BASKET</button>
            </StyledModal>
        </StyledModalContainer>

    const showModalOrNot = () => {
        return (show) ? Modal() : <></>;
    }

    return (showModalOrNot())
}

export default Modal
