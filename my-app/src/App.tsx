import React from 'react';
import './App.css';

import styled from "styled-components";
import newTheme,
{StyledTitle, StyledNavBar,
  StyledSubtitle,
  StyledDescription,
  StyledMain, StyledFlexRowCard, StyledFlexColumnCard, StyledButton, StyledCitation, StyledSmallTitle, StyledFlexRow,
  StyledBlockLayout, StyledGridMe, StyledGridMeFirstCol}
from './Style/ThemeV2';

import listCard from './Data/cards';
import listMyWorks from './Data/myWork';

import {IArticle} from './Types/IArticle';
import IWork from './Types/IMyWork';

import {logo} from './Data/card/index';

import MyWork from './ComponentV2/Molecules/MyWork/MyWork';

import NftGallery from './ComponentV2/Molecules/NftGalery/NftGallery';

export const StyledLogo = styled.div ` 
  & > a {
    & > img {
      width : 130px;
    }
  }
`;

function Logo() {
  return (
    <StyledLogo>
      <a>
        <img src={logo}/>
      </a>
    </StyledLogo>
  )
}

function NavBar() {
  return (
    <StyledNavBar> 
      <ul>
        <li>
            <a href='#Home'>Home</a>
        </li>
        <li>
          <a href='#About'>About</a>
        </li>
        <li>
          <a href='#Store'>Store</a>
          </li>
        <li>
          <a href='#Work'>Work</a>
          </li>
        <li>
          <a href='#Pages'>Pages</a>
          </li>
      </ul>
    </StyledNavBar>
  );
}

function BasketSelector({count} : {count : number}) {
  return (
  <a>Cart{count}</a>
  )
}

interface IGenButtonProps {
  text : string;
  href ?: string;
  size ?: 'small' | 'medium' | 'big';
}



function GenButton ({text, href = '', size = 'small'} : IGenButtonProps) {
  return ( 
   <StyledButton>
     <a  href={href}>{text}</a>
   </StyledButton>
  );
}

// style={{backgroundColor : newTheme.root.backgroundColor}}




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

function HeaderBar () {
return (
  <StyledFlexRow>
  <Logo />
  <NavBar />
  <BasketSelector count={5} />
  <GenButton text='Browse Gallerie' href='#gallerie' size='medium' />
  </StyledFlexRow>
)
}

function App() {
  return (
    <StyledMain>
    <section>
      <HeaderBar />

<StyledBlockLayout>
  <StyledGridMe>
      <StyledGridMeFirstCol>
        <Title />
        <Description />
        <GenButton text='Browse Gallerie' href='#gallerie' size='big' />
      </StyledGridMeFirstCol>
  </StyledGridMe> 
</StyledBlockLayout>

   
   
    </section>
      
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

    <section>
    <StyledBlockLayout>
      <NftGallery listCards={listCard} />
     
      </StyledBlockLayout>

    </section>

  <section>
  <StyledBlockLayout>

    <MyWork listMyWorks={listMyWorks} />
    </StyledBlockLayout>

  </section>

  <section>
  <StyledBlockLayout>

    <StyledSubtitle>Let's get in touch today</StyledSubtitle>
    </StyledBlockLayout>

  </section>

  <footer>
    Copyright © NFT | Designed by BRIX Templates - Powered by Webflow
  </footer>
    </StyledMain>
  );
}

export default App;
