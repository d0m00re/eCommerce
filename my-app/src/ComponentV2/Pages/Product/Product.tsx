import React, { ReactElement, useState, useEffect } from 'react'

import { IArticle } from '../../../Types/IArticle';
import listCard from './../../../Data/cards';

import styled from "styled-components";

import * as adtBasket from './../../../Redux/adapters/BasketAdapter';
import {useDispatch} from 'react-redux';

import {
    StyledTitle, StyledNavBar,
    StyledSubtitle,
    StyledDescription,
    StyledMain, StyledFlexRowCard, StyledFlexColumnCard, StyledButton, StyledCitation, StyledSmallTitle, StyledFlexRow,
    StyledBlockLayout, StyledGridMe, StyledGridMeFirstCol
} from './../../../Style/ThemeV2';

import GenButton from "./../../Atoms/GenButton/GenButton";

import { useParams } from 'react-router';

import ScrollAnimation from 'react-animate-on-scroll';


interface Props {
}


const StyledProductLayout = styled.div` 
    display : grid;
    grid-template-columns: 1fr 0.9fr;
    grid-column-gap: 68px;
    grid-template-rows: auto;
    grid-auto-columns: 1fr;
`;


const StyledInformation = styled.div` 
    background-color : 'blue';
`;

const StyledImgContainer = styled.div` 
    background-color : #201933;
    border-radius: 30px;
    box-shadow: 0 10px 40px 0 rgba(0, 0, 0, 0.4);
    display : flex;
    align-items : center;
    justify-content : center;
`;

const StyledImg = styled.img` 
    max-width : 100%;
    width : 286px;
    height : 438px;
`;

function Product(): ReactElement {
    const params: Partial<{ uuid: string }> = useParams();
    const [art, setArt] = useState<IArticle>();

    useEffect(() => {
        let id = listCard.findIndex(art => params?.uuid === art?._uuid);
        if (id !== -1)
            setArt(listCard[id]);
    }, [params])

/*
    useEffect(() => {
        console.log('--->')
        console.log(window.location)
        let uuid = window.location.pathname.split('/')[2];
        console.log('check : ' + uuid);
        console.log(listCard)
        let id = listCard.findIndex((art : IArticle) => uuid === art._uuid);
        console.log(id)
        if (id !== -1)
            setArt(listCard[id]);
    }, [window.location.pathname])
*/
  let dispatch = useDispatch();

    return (
        <>
            {art?._uuid && (
                <StyledBlockLayout>
                    <StyledProductLayout  style={{marginBottom : '300px'}}>

                        <StyledImgContainer>
                        <ScrollAnimation animateIn="fadeIn" duration = {2}>

                           <StyledImg src={art?.pathImg} />
                        </ScrollAnimation>
                        </StyledImgContainer>
                    
                        <ScrollAnimation animateIn="fadeIn" duration = {4}>

                        <StyledInformation>
                            <StyledTitle>
                                {art?.title}
                            </StyledTitle>
                            <StyledDescription>
                                Lorem ipsum dolor sit ametdolo, consectetur adipiscing eli.
                            </StyledDescription>
                            <StyledSmallTitle>
                                {art?.price}
                    </StyledSmallTitle>
                            <GenButton onClick={() => {adtBasket.addArt(dispatch, {article : art ,count : 1});}} text='Add to cart' size='big' />
                            <GenButton text='Place bid on rarible' size='big' />

                        </StyledInformation>
                        </ScrollAnimation>

                    </StyledProductLayout>
                </StyledBlockLayout>)}
        </>
    );
}

export default Product;