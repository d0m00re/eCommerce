import React, { ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import IReducerBasket from './../../../Types/IReducerBasket';
import { IArticleBasket } from '../../../Types/IArticle';

import styled from 'styled-components';


import * as basketAdp from './../../../Redux/adapters/BasketAdapter';

interface Props {
    basket: IReducerBasket
}

let StyledBody = styled.div` 
    display: flex;
    flex-direction : column;
    flex-grow : 1;
    flex-shrink: 1;
    flex-basis : 0%;
`;

let StyledBodyContainer = styled.div` 
    overflow: auto;
    padding-top: 12px;
    padding-bottom: 12px;
    padding-left: 24px;
    padding-right: 24px;
    flex-grow : 1;
    flex-shrink: 1;
    flex-basis : 0%;
`;

let StyledCtnImg = styled.div ` 
    width : 60px;
    height : 60px;
    background-color : #201933;
    border : solid 1px;
    border-radius : 10px;
    border-color : #4e4b66;

    display : flex;
    align-items : center;
    justify-content : center;
`;

let StyledImg = styled.img` 
    width : 30px;
    height : 40px;



    border-style: solid;
    border-width: 1px;
    border-color: #4e4b66;
    border-radius: 6px;
    display: inline-block;
    max-width: 100%;
`;

let StyledBodyCard = styled.div` 
    display: flex;
    padding-top: 12px;
    padding-bottom: 12px;
    align-items: flex-start;
`;

let StyledCard = styled.div` 
    display: flex;
    margin-right: 16px;
    margin-left: 16px;

    flex-direction: column;
    flex-grow : 1;
    flex-shrink: 1;
    flex-basis : 0%;
`;

let StyledTitle = styled.div` 
margin-bottom: 7px;
color: #fff;
font-weight: 700;
padding-top : 6px;
`;

let StyledText = styled.div` 
    color: #bebdd4;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
`;

let StyledRemove = styled.div` 
    margin-top : 12px;
    color : #fff;
    font-size: 18px;
    line-height: 30px;
    font-weight: 400;
    transition: color 350ms ease, -webkit-transform 350ms ease;
    cursor : pointer;



    &:hover {
        color : grey;
        transition: transform 350ms ease, -webkit-transform 350ms ease;
    }
`;

function ModalBody({ basket }: Props): ReactElement {
    const dispatch = useDispatch();

    return (
        <StyledBody>
            <StyledBodyContainer>
                {
                    basket.articlesList?.length > 0 &&
                    basket.articlesList.map((_card: IArticleBasket) =>
                        <StyledBodyCard>
                            <StyledCtnImg>
                                <StyledImg src={_card.article.pathImg} />
                            </StyledCtnImg>
                            <StyledCard>
                                <StyledTitle>{_card.article.title}</StyledTitle>
                                <StyledText>$ {_card.article.price}/u USD</StyledText>
                                <StyledText>Quantity : {_card.count}</StyledText>
                                <StyledRemove onClick={() => { basketAdp.deleteArt(dispatch, { uuid: _card.article._uuid }) }}>Remove</StyledRemove>
                            </StyledCard>
                        </StyledBodyCard>
                    )
                }
            </StyledBodyContainer>
        </StyledBody>
    )
}

export default ModalBody
