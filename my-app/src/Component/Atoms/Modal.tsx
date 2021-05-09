import React, { ReactElement, useState, useEffect } from 'react'
import styled, {keyframes} from "styled-components";
import IReducerBasket from './../../Types/IReducerBasket';
import { IArticleBasket } from '../../Types/IArticle';


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

    animation-name : ${fade2} ;
    animation-duration : 1.5s ;
    animation-fill-mode: forwards;
`;

const StyledModalTitle = styled.h4`
    color : orange;
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

function ModalArticle({ basket} : {basket : IArticleBasket}) : ReactElement {
    return (
        <>
            <div>{basket.article.title}</div>
            <div>count :{basket.count}</div>
            <button>incr</button>
            <button>decr</button>
            <button>delete</button>
            <StyledImg src= {basket.article.pathImg} alt={basket.article.description}></StyledImg>
            <div>{basket.article.price}</div>
        </>
    );
};

function Modal({ basket, onClose }: Props): ReactElement {

    const Modal = () =>
        <StyledModalContainer>
            <StyledModal>
                Your product
                {
                    basket.articlesList.map(((_article : IArticleBasket) => <ModalArticle basket={_article}></ModalArticle>))
                }
                <p>Total price : {basket.totalPrice}</p>
            <button onClick={onClose}>Continue</button>
            <button onClick={onClose}>Buy</button>

            </StyledModal>
        </StyledModalContainer>

    const showModalOrNot = () => {
        return (basket.showBasket) ? Modal() : <></>;
    }

    return (showModalOrNot())
}

export default Modal
