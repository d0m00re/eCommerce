import React, {ReactElement} from 'react';

import styled from "styled-components";
import newTheme,
{StyledTitle, StyledNavBar,
  StyledSubtitle,
  StyledDescription,
  StyledMain, StyledFlexRowCard, StyledFlexColumnCard, StyledButton, StyledCitation, StyledSmallTitle, StyledFlexRow,
  StyledBlockLayout, StyledGridMe, StyledGridMeFirstCol}
from './../../../Style/ThemeV2';

import listMyWorks from './../../../Data/myWork';

import {IArticle} from './../../../Types/IArticle';
import IWork from './../../../Types/IMyWork';

import {logo} from './../../../Data/card/index';

import MyWork from './../../../ComponentV2/Molecules/MyWork/MyWork';

import LinkNft from './../../Atoms/LinkNft/LinkNft';

const StyledImgLink = styled.a ` 
    margin-bottom : 48px;

   
`;

const StyledImg = styled.img`
 display : inline-block;
 max-width : 100%;
 transition: transform 350ms ease, -webkit-transform 350ms ease;

&:hover {
    transform : scale(1.06);
    transition: transform 350ms ease, -webkit-transform 350ms ease;
}
`;

const StyledMyBlockLayout = styled(StyledBlockLayout) ` 
    max-width: 730px;
    margin-bottom : 58px;
    padding-bottom : 0px;
    padding-top : 220px;
`;

const StyledMySubtitle = styled(StyledSubtitle)` 
    text-align : center;
`;
const StyledMyWorkCitation = styled(StyledCitation)` 
    text-align : center;
`;

const StyledGridCrystalCard = styled.div ` 
    display : grid;
    grid-auto-columns: 1fr;
    grid-template-columns : 1fr 1fr 1fr;
    grid-template-rows: auto;

    grid-column-gap: 32px;
    grid-row-gap: 32px;
`;

interface Props {
    listCards : IArticle[]    
}

function NftGallery({listCards}: Props): ReactElement {
    return (
        <>
        <StyledMyBlockLayout>
        <StyledMySubtitle>NFT Gallery</StyledMySubtitle>
      <StyledMyWorkCitation>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt magna non, libero turpis sem vitae et. Natoque ut egestas sit volutpat etiam enim. Adipiscing rhoncus.</StyledMyWorkCitation>

        </StyledMyBlockLayout>

      <StyledGridCrystalCard>
        {
          listCards.map((card : IArticle) => (
            <div key={card._uuid + 'card'} >
                <div style={{paddingBottom : '48px'}}>
                <StyledImgLink>
                    <StyledImg src = {card.pathImg} />
                </StyledImgLink>
                </div>
              <StyledDescription>$ {card.price} USD</StyledDescription>
              <StyledSmallTitle>{card.title}</StyledSmallTitle>
              <StyledCitation>{card.description.slice(0, 57)}</StyledCitation>
              <LinkNft href={`/product/${card._uuid}`} />
            </div>
          ))
        }
      </StyledGridCrystalCard>
        </> 
    )
}

export default NftGallery
 