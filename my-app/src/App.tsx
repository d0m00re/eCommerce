import React from 'react';
import './App.css';

import styled from "styled-components";
import theme from './Style/Theme';

import listCard from './Data/cards';

let newTheme = {
  root : {
    backgroundColor : '#0f0823'
  },
  h1 : {
    color : '#fff',
  },
  text : {
    color : 'rgb(190, 189, 212)'
  }
};



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
}

function GenButton ({text} : IGenButtonProps) {
  return ( 
   <div>{text}</div>
  );
}


const StyledTitle = styled.h1 ` 
  color : ${newTheme.h1.color};
  margin-top : 0px;
  margin-bottom : 24px;
  font-size : 100px;
  line-height : 105px;
  font-weight : 700;
`;

function Title () {
  return (
    <StyledTitle>I'm John Carter, a NFT Artist</StyledTitle>
  );
}

const StyledDescription = styled.p ` 
  color : ${newTheme.text.color};
`;

function Description () {
  return (
    <StyledDescription>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel purus cras curabitur eget facilisis nisl. Neque a porttitor .
    </StyledDescription>
  );
}


function App() {
  return (
    <>
    <section style={{backgroundColor : newTheme.root.backgroundColor}}>
      <NavBar />
      <GenButton text='Browse Gallerie' />
      <Title />
      <Description />
      <GenButton text='Browse Gallerie' />
    </section>
      
    <section>
     <StyledTitle>About me</StyledTitle>
    </section>

    <section>
      <StyledTitle>NFT Gallery</StyledTitle>
    </section>

  <section>
    <StyledTitle>My Work</StyledTitle>
  </section>

  <section>
    <StyledTitle>Let's get in touch today</StyledTitle>
  </section>

  <footer>
  Copyright © NFT | Designed by BRIX Templates - Powered by Webflow
  </footer>
    </>
  );
}

export default App;
