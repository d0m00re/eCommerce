import React, { ReactElement, useState } from 'react'
import { IArticle } from './../../../Types/IArticle';

import styled from "styled-components";

import { useSelector, useDispatch } from 'react-redux';

import * as actionBasket from './../../../Redux/actions/Basket';

import { StyledModalTitle } from './../../../Style/general';




//import 

const StyledCard = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    background-color : violet;
    width : 300px;
    position : relative;
`;

const StyledCardHover = styled.div`
position : absolute;
        width : 100%;
         height : 100%;
    visibility : hidden;

    ${StyledCard}:hover & {
        visibility : visible;
        
        background-color : rgba(255, 0,0, 0.5);
        z-index : 42;
    }

`;

const StyledImg = styled.img`
    width: 242px;
    height: 242px;
`;

const StyledPrice = styled.h2`
    position : absolute;
    background-color : green;
    color : white;
    top : 8px;
    left : 0;
    margin : 0;
    padding : 8px 16px;
    z-index : 6;
`;

const StyledQtSelector = styled.div`
    display : flex;

`

interface Props {
    article: IArticle
}
/*
            <p>{article.title}, description : {article.description} price : {article.price}, path : {article.pathImg}</p>
*/

function Card({ article }: Props) {

    const [countArt, setCountArt] = useState<number>(1);

    const incrArtc = () => setCountArt(old => old + 1);
    const decrArtc = () => setCountArt(old => (old > 0) ? old - 1 : old);

    const dispatch = useDispatch();

    const addNewArticle = () => {
        console.log('add new article');
        dispatch(actionBasket.articleAdd({ article: article, count: countArt }));
        setCountArt(1);
    }

    /*
    const deleteNewArticle = () => {
        console.log('deletre new article');
    //    dispatch(actionBasket.articleDelete({uuid : article._uuid, count : 5}))
    }
    */

    return (
        <StyledCard>
            <StyledImg src={article.pathImg} />
            <StyledModalTitle>---- {article.title} ----</StyledModalTitle>
            <p>{article.description}</p>
            <StyledPrice>{article.price} $</StyledPrice>
            <StyledCardHover>
                <p>Quantity</p>
                <StyledQtSelector>
                    <button onClick={decrArtc}>-</button>
                    <p>{countArt}</p>
                    <button onClick={incrArtc}>+</button>
                </StyledQtSelector>
                <button onClick={addNewArticle}>Add Product</button>
            </StyledCardHover>


        </StyledCard>);
}

export default Card;
