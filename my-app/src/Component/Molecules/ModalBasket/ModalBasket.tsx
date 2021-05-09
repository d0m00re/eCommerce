import React, { ReactElement, useState, useEffect } from 'react'
import styled, {keyframes} from "styled-components";
import IReducerBasket from './../../../Types/IReducerBasket';
import { IArticleBasket } from '../../../Types/IArticle';

import ModalListArticle from './ModalListArticle';
import ModalHeader from './ModalHeader';
import ModalBottom from './ModalBottom';

// fade
const fade = keyframes`
  from {
    background-color: rgba(30, 20, 58, 0);
  }

  to {
    background-color: rgba(30, 20, 58, 0.8);

}
`;

const fade3 = keyframes`
  from {
    o
    background-color: rgba(30, 20, 58, 0);
  }
  to {
    background-color: rgba(30, 20, 58, 1);

}
`;

const StyledModalContainer = styled.div` 
    position : absolute;
    width : 100vw;
    height : 100vh;

    animation-name : ${fade} ;
    animation-duration : 1s ;
    animation-fill-mode: forwards;

    z-index : 42;
`
/*
width : 200px;
    height : 200px;
*/
const StyledModal = styled.div`
    position: absolute;
    
    width : 500px;


    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    background-color : orange;

    animation-name : ${fade3} ;
    animation-duration : 1.5s ;
    animation-fill-mode: forwards;
`;



const StyledImg = styled.img `
    width : 70px;
    height : 70px;
`;

interface Props {
    basket : IReducerBasket
    onClose: () => any
}

const StyledContainerArt = styled.section ` 
    width : 480px
`;

function Modal({ basket, onClose }: Props): ReactElement {

    const Modal = () =>
        <StyledModalContainer>
            <StyledModal>
                <ModalHeader onClose={onClose} />
                {
                    basket.articlesList.map(((_article : IArticleBasket) => <ModalListArticle key={'art-' + _article.article._uuid} basket={_article}></ModalListArticle>))
                }
                <p>Total price : {basket.totalPrice}</p>
                <ModalBottom onClose={onClose}/>
           

            </StyledModal>
        </StyledModalContainer>

    const showModalOrNot = () => {
        return (basket.showBasket) ? Modal() : <></>;
    }

    return (showModalOrNot())
}

export default Modal
