import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IReducerBasket from './../../../Types/IReducerBasket';

import styled from 'styled-components';

import ModalBody from './ModalBody';
import ModalBottom from './ModalBottom';
import ModalHeader from './ModalHeader';

interface Props {

}

let StyledContainer = styled.div` 
    opacity: 1;
    transition: opacity 300ms ease 0s;
    z-index: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    position: fixed;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: 2;
    background-color: rgba(0, 0, 0, 0.8);
`;

let StyledModalContainer = styled.div` 
    transform: scale(1);
    transition: transform 300ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
    border-radius: 20px;
    background-color: #1e143a;
    display: flex;
    width: 100%;
    max-width: 480px;
    min-width: 320px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    overflow: auto;
    box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.25);
`;

function ModalBasket({ }: Props): ReactElement {
    const basket: IReducerBasket = useSelector((state: { basket: IReducerBasket }) => state.basket);
    const dispatch = useDispatch();

    return (
        <>
            {
                basket.showBasket && (
                    <StyledContainer>
                        <StyledModalContainer>
                        <ModalHeader />

                        <ModalBody basket={basket} />

                        <ModalBottom totalPrice={basket.totalPrice} />
                       
                        </StyledModalContainer>

                    </StyledContainer>
                )
            }
        </>
    )
}

export default ModalBasket
