import React from 'react';
import './App.css';

import styled from "styled-components";
import newTheme,
{StyledTitle,
  StyledSubtitle,
  StyledDescription,
  StyledMain, StyledFlexRowCard, StyledFlexColumnCard, StyledButton}
from './Style/ThemeV2';

import listCard from './Data/cards';

import {IArticle} from './Types/IArticle';



function NavBar() {
  return (
    <nav> 
      <ul>
        <li>Card(X)</li>
        <li>Home</li>
        <li>About</li>
        <li>Store</li>
        <li>Work</li>
        <li>Pages</li>
      </ul>
    </nav>
  );
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
function App() {
  return (
    <StyledMain>
    <section>
      <NavBar />
      <GenButton text='Browse Gallerie' href='#gallerie' size='medium' />
      <Title />
      <Description />
      <GenButton text='Browse Gallerie' href='#gallerie' size='big' />
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
