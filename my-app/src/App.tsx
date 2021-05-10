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
import listMyWork from './Data/myWork';

import {IArticle} from './Types/IArticle';
import IWork from './Types/IMyWork';

import {logo} from './Data/card/index';

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

const StyledImg = styled.img`

`;


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
     <StyledSubtitle>About me</StyledSubtitle>
     <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt magna non, libero turpis sem vitae et. Natoque ut egestas sit volutpat.</StyledDescription>
     <StyledList>
        <li> Illustration Artist</li>
        <li> 3D Modeler</li>
     </StyledList>
     <GenButton text='Hire Me' href='#contact' size='big' />

    </section>

    <section>
      <StyledSubtitle>NFT Gallery</StyledSubtitle>
      <StyledDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt magna non, libero turpis sem vitae et. Natoque ut egestas sit volutpat etiam enim. Adipiscing rhoncus.</StyledDescription>

      <StyledFlexRowCard>
        {
          listCard.map((card : IArticle) => (
            <StyledFlexColumnCard>
              <StyledImg key={card._uuid + 'card'} src = {card.pathImg} />
              ${card.price}, ${card.title}, ${card.description}, linkToCard
            </StyledFlexColumnCard>
          ))
        }
      </StyledFlexRowCard>
    </section>

  <section>
    <StyledSubtitle>My Work</StyledSubtitle>
    <StyledCitation>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt magna non, libero turpis sem vitae et</StyledCitation>
    <> 
        {
          listMyWork.map(((myW : IWork) => (
            <>
              <StyledSmallTitle>{myW.title}</StyledSmallTitle>
              <StyledDescription>{myW.desc}</StyledDescription>

            </>
          )))
        }
    </>
  </section>

  <section>
    <StyledSubtitle>Let's get in touch today</StyledSubtitle>
  </section>

  <footer>
  Copyright © NFT | Designed by BRIX Templates - Powered by Webflow
  </footer>
    </StyledMain>
  );
}

export default App;
