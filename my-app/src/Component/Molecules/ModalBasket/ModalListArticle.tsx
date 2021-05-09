import React, { ReactElement, useState, useEffect} from 'react'
import styled, {keyframes} from "styled-components";
import IReducerBasket from './../../../Types/IReducerBasket';
import { IArticleBasket } from '../../../Types/IArticle';

import {useDispatch} from 'react-redux';
import * as actionBasket from './../../../Redux/actions/Basket';

import IPayloadIncrDecr from './../../../Types/IPayloadIncrDecr';

import * as basketAdapter from './../../../Redux/adapters/BasketAdapter';

const StyledImg = styled.img `
    width : 70px;
    height : 70px;
`;

interface Props {basket : IArticleBasket}

function ModalArticle({ basket} : Props) : ReactElement {

    const dispatch = useDispatch();

    return (
        <>
            <div>{basket.article.title}</div>
            <div>count :{basket.count}</div>
            <button onClick={() => basketAdapter.incrArt(dispatch, {uuid : basket.article._uuid, count : 1})}>
                incr
            </button>
            <button  onClick={() => basketAdapter.decrArt(dispatch, {uuid : basket.article._uuid, count : 1})}>
                decr
            </button>
            <button onClick={() => basketAdapter.deleteArt(dispatch, {uuid : basket.article._uuid})}>
                delete
            </button>
            <StyledImg src= {basket.article.pathImg} alt={basket.article.description}></StyledImg>
            <div>{basket.article.price}</div>
        </>
    );
};

export default ModalArticle;
