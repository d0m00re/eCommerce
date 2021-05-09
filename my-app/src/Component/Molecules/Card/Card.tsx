import React, { ReactElement } from 'react'
import { IArticle } from './../../../Types/IArticle';

import styled from "styled-components";

import { useSelector, useDispatch } from 'react-redux';

import * as actionBasket from './../../../Redux/actions/Basket';

//import 

const StyledCard = styled.div ` 
    background-color : violet;
    width : 400px;

`;

const StyledImg = styled.img`
    width: 200px;
    height: 200px;
`;

interface Props {
    article: IArticle
}
/*
            <p>{article.title}, description : {article.description} price : {article.price}, path : {article.pathImg}</p>
*/

function Card({ article }: Props) {
    const dispatch = useDispatch();

    const addNewArticle = () => {
        console.log('add new article');
        dispatch(actionBasket.articleAdd({article : article, count : 1}));
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
            <p>---- {article.title} ----</p>
            <p>{article.description}</p>
            <button onClick={addNewArticle}>ADD 5</button>
        </StyledCard>);
}

export default Card;
