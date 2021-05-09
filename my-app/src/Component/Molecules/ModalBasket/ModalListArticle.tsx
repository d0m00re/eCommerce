import React, { ReactElement} from 'react'
import styled from "styled-components";
import { IArticleBasket } from '../../../Types/IArticle';

import {useDispatch} from 'react-redux';

import * as basketAdapter from './../../../Redux/adapters/BasketAdapter';

import  QtSelector from './../../Atoms/QuantitySelector/QuantitySelector';

import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const StyledImg = styled.img `
    width : 105px;
    height : 105px;
`;


const StyledTd = styled.td ` 
    padding : 16px;
`;

const StyledTdAlignLeft = styled(StyledTd) ` 
    text-align : right;
`;

interface Props {basket : IArticleBasket}

function ModalArticle({ basket} : Props) : ReactElement {

    const dispatch = useDispatch();

    return (
        <tr>
            <StyledTd><StyledImg src= {basket.article.pathImg} alt={basket.article.description}></StyledImg></StyledTd>
            <StyledTd>{basket.article.title}</StyledTd>
            <StyledTd></StyledTd>
            <StyledTdAlignLeft>{basket.article.price}$</StyledTdAlignLeft>
            <StyledTd><QtSelector count = {basket.count} fIncr={
                () => basketAdapter.incrArt(dispatch, {uuid : basket.article._uuid, count : 1})
            } fDecr={
                () => basketAdapter.decrArt(dispatch, {uuid : basket.article._uuid, count : 1})
            } />
            </StyledTd>
            <StyledTdAlignLeft>{basket.count * basket.article.price}$</StyledTdAlignLeft>
            <StyledTd>
                <button onClick={() => basketAdapter.deleteArt(dispatch, {uuid : basket.article._uuid})}>
                    <FontAwesomeIcon icon={faTrashAlt} style={{width : '20px', height : '20px'}}/>
                </button>
            </StyledTd>
        </tr>
    );
};

export default ModalArticle;
