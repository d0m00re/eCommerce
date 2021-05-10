import React, { ReactElement } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import IReducerBasket from './../../../Types/IReducerBasket';
import * as actions from './../../../Redux/actions/Basket';
import { IArticleBasket } from '../../../Types/IArticle';

import GenButton from './../../Atoms/GenButton/GenButton';
import styled from 'styled-components';

import {StyledVerySmallTitle, StyledBlockLayout} from './../../../Style/ThemeV2';

import * as basketAdp from './../../../Redux/adapters/BasketAdapter'; 

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

let StyledHeader = styled.div`
    position : relative;
    padding-top: 26px;
    padding-bottom: 26px;
    border-bottom-color: #4e4b66;

    position: relative;
    display: flex;
    padding : 16px 24px;
    justify-content: space-between;

    flex-grow: 0;
    flex-shrink: 0;
    flex-basis: auto;
    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: #e6e6e6;
    align-items: center;
`;

let StyledBody = styled.div` 
    display: flex;
    flex-direction : column;
    flex-grow : 1;
    flex-shrink: 1;
    flex-basis : 0%;
`;

let StyledBodyContainer = styled.div ` 
    overflow: auto;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    flex-grow : 1;
    flex-shrink: 1;
    flex-basis : 0%;
`;

let StyledImg = styled.img ` 
    width : 60px;
    height : 60px;

    border-style: solid;
    border-width: 1px;
    border-color: #4e4b66;
    border-radius: 6px;
    display: inline-block;
    max-width: 100%;
`;

let StyledBodyCard = styled.div ` 
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    align-items: flex-start;
`;

let StyledBottom = styled.div ` 
        display : flex;
        flex-direction : column;
    & > div {
       display : flex;
       flex-direction : row;
       justify-content : space-aroud;
    }
`;

let StyledCard = styled.div ` 
    display: flex;
    margin-right: 16px;
    margin-left: 16px;

    flex-direction: column;
    flex-grow : 1;
    flex-shrink: 1;
    flex-basis : 0%;
`;

let StyledTitle = styled.div ` 
margin-bottom: 7px;
color: #fff;
font-weight: 700;
`;

let StyledText = styled.div ` 
color: #bebdd4;
font-size: 18px;
line-height: 30px;
font-weight: 400;
`;

let StyledRemove = styled.div ` 

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
                            <StyledHeader>
                                <StyledVerySmallTitle>Your Cart</StyledVerySmallTitle>
                                <button onClick={() => basketAdp.close(dispatch)}>x</button>
                            </StyledHeader>
                        <StyledBody>
                            <StyledBodyContainer>
                                {
                                    basket.articlesList?.length > 0 &&
                                    basket.articlesList.map((_card : IArticleBasket) => 
                                        <StyledBodyCard>
                                            <StyledImg src={_card.article.pathImg} />
                                            <StyledCard>
                                                <StyledTitle>{_card.article.title}</StyledTitle>
                                                <StyledText>$ {_card.article.price}/u USD</StyledText>
                                                <StyledText>Quantity : {_card.count}</StyledText>
                                                <StyledRemove onClick={() => {basketAdp.deleteArt(dispatch, {uuid : _card.article._uuid})}}>remove</StyledRemove>
                                            </StyledCard>
                                        </StyledBodyCard>
                                    )
                                }
                            </StyledBodyContainer>
                        </StyledBody>
                        <StyledBottom>
                                <div>
                                <StyledText>Subtotal</StyledText>
                                <StyledText>${basket.totalPrice}</StyledText>
                                </div>
                                <GenButton size='big' href='/' onClick={() => {}} text='Continue To Checkout' />
                        </StyledBottom>
                        </StyledModalContainer>

                    </StyledContainer>
                )
            }
        </>
    )
}

export default ModalBasket
