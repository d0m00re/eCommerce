import React from 'react';

import styled from "styled-components";
import newTheme,
{StyledTitle, StyledNavBar,
  StyledSubtitle,
  StyledDescription,
  StyledMain, StyledFlexRowCard, StyledFlexColumnCard, StyledButton, StyledCitation, StyledSmallTitle, StyledFlexRow,
  StyledBlockLayout, StyledGridMe, StyledGridMeFirstCol}
from './../../../Style/ThemeV2';

import listCard from './../../../Data/cards';
import listMyWorks from './../../../Data/myWork';

import {IArticle} from './../../../Types/IArticle';
import IWork from './../../../Types/IMyWork';

import {logo} from './../../../Data/card/index';

import MyWork from './../../../ComponentV2/Molecules/MyWork/MyWork';

import NftGallery from './../../../ComponentV2/Molecules/NftGalery/NftGallery';

import GenButton from './../../Atoms/GenButton/GenButton';

import ScrollAnimation from 'react-animate-on-scroll';

export const StyledLogo = styled.div ` 
  & > a {
    & > img { 
      width : 130px;
    }
  } 
`;

function Title () {
  return (
    <StyledTitle>I'm John Carter, a NFT Artist</StyledTitle>
  );
}

function Description () {
  return (
    <StyledDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus cras curabitur eget facilisis nisl. Neque a porttitor .
    </StyledDescription>
  );
}
 



const StyledList = styled.ul ` 
  color : ${newTheme.ul.color};
`; 

// 


function Main() {
  return (
    <StyledMain>
          <ScrollAnimation animateIn="fadeIn">

        <section  style={{paddingTop : '150px'}}>
            <StyledBlockLayout>
                <StyledGridMe>
                    <StyledGridMeFirstCol>
                        <Title />
                        <Description />
                        <GenButton useDynamicAnchor text='Browse Gallerie' href='/page#store' size='big' />
                    </StyledGridMeFirstCol>
                </StyledGridMe> 
            </StyledBlockLayout>
        </section>
        </ScrollAnimation>

      {/*}
        <section>
            <StyledBlockLayout>
                <StyledSubtitle>About me</StyledSubtitle>
                <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt magna non, libero turpis sem vitae et. Natoque ut egestas sit volutpat.</StyledDescription>
                <StyledList>
                     <li> Illustration Artist</li>
                    <li> 3D Modeler</li>
                </StyledList>
                <GenButton text='Hire Me' href='#contact' size='big' />
            </StyledBlockLayout>
        </section>
    */}
    <ScrollAnimation animateIn="fadeIn">
        <section id='store'>
        <StyledBlockLayout>
            <NftGallery listCards={listCard} />
       </StyledBlockLayout>

    </section>
    </ScrollAnimation>

  <section  id='work'>
  <StyledBlockLayout>

    <MyWork listMyWorks={listMyWorks} />
    </StyledBlockLayout>

  </section>

{/*}
  <section>
  <StyledBlockLayout>

    <StyledSubtitle>Let's get in touch today</StyledSubtitle>
    </StyledBlockLayout>

  </section>
  */}
  <footer>
    Copyright © NFT | Designed by BRIX Templates - Powered by Webflow
  </footer>
    </StyledMain>
  );
}

export default Main;
 