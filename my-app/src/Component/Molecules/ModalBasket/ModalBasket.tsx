import React, { ReactElement } from 'react'
import styled, { keyframes } from "styled-components";
import IReducerBasket from './../../../Types/IReducerBasket';
import { IArticleBasket } from '../../../Types/IArticle';

import ModalListArticle from './ModalListArticle';
import ModalHeader from './ModalHeader';
import ModalBottom from './ModalBottom';

interface Props {
    basket: IReducerBasket
    onClose: () => any
}

// fade
const fade = keyframes`
  from {
    background-color: rgba(30, 20, 58, 0);
  }

  to {
    background-color: rgba(30, 20, 58, 0.8);

}
`;
//    background-color: rgba(30, 20, 58, 1);

const fade3 = keyframes`
  from {
    background-color: rgba(30, 20, 58, 0);
  }
  to {
    background-color : #221a4a;

}
`;

const StyledModalContainer = styled.div` 
    position : absolute;
    width : 100vw;
    height : 100%;

    animation-name : ${fade} ;
    animation-duration : 1s ;
    animation-fill-mode: forwards;

    z-index : 420;

    background-color : white;
`

const StyledModal = styled.div`
    position: absolute;
    
 
    padding : 16px;
    border : solid 5px;
    border-radius : 24px;

    top : 50%;
    left : 50%;
    transform : translate(-50%, -50%);
    background-color : orange;

    animation-name : ${fade3} ;
    animation-duration : 1.5s ;
    animation-fill-mode: forwards;
`;

const StyledTh = styled.th ` 
        padding : 16px;

`;

const StyledTable = styled.table ` 
    border : solid;
    border-width : 2px 2px 2px 2px;
    border-radius : 12px;
`;

const StyledThead = styled.thead `
    background-color : orange;
    color : black;

`;

//background-color : #fcf9f5;

const StyledTBody = styled.tbody ` 
    background-color : #483799;
    color : black;
`;

const StyledFinalPrice = styled.h3 `
    color : orange;
`;

function Modal({ basket, onClose }: Props): ReactElement {

    const Modal = () =>
        <StyledModalContainer>
            <StyledModal>
                <ModalHeader onClose={onClose} />
                <StyledTable>
                    <StyledThead>
                        <tr>
                            <th colSpan = {3} style={{padding : '12px'}}>PRODUCT</th>
                            <StyledTh>UNIT PRICE</StyledTh>
                            <StyledTh>QUANTITY</StyledTh>
                            <StyledTh>TOTAL</StyledTh>
                            <StyledTh></StyledTh>
                        </tr>
                    </StyledThead>
                    <StyledTBody>
                        {
                            basket.articlesList.map(((_article: IArticleBasket) => <ModalListArticle key={'art-' + _article.article._uuid} basket={_article}></ModalListArticle>))
                        }
                    </StyledTBody>



                </StyledTable>

                <StyledFinalPrice>Total price : {basket.totalPrice}$</StyledFinalPrice>

                <ModalBottom onClose={onClose} />

            </StyledModal>
        </StyledModalContainer>

    const showModalOrNot = () => {
        return (basket.showBasket) ? Modal() : <></>;
    }

    return (showModalOrNot())
}

export default Modal
