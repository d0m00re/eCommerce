import React, { ReactElement } from 'react'
import { IArticle } from './../../../Types/IArticle';

import styled from "styled-components";

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
    return (
        <StyledCard>
            <StyledImg src={article.pathImg} />
            <p>---- {article.title} ----</p>
            <p>{article.description}</p>
        </StyledCard>);
}

export default Card;
