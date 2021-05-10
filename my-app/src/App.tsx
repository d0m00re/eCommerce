import React from 'react';
import './App.css';

import styled from "styled-components";
import newTheme,
{
  StyledMain
}
  from './Style/ThemeV2';

import Main from './ComponentV2/Pages/Main/Main';
import Product from './ComponentV2/Pages/Product/Product';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HeaderBar from './ComponentV2/Molecules/HeaderBar/HeaderBar';

import ModalBasket from './ComponentV2/Molecules/ModalBasket/ModalBasket';

function App() {
  return (
    <StyledMain>
    
      <Router>
      <ModalBasket /> 
      <HeaderBar />
        <Switch>

          <Route exact path='/product/:uuid'>
            <Product />
          </Route>
 
          <Route path='/'>
            <Main />
          </Route>
        </Switch>
      </Router>

    </StyledMain>

  )
}

export default App;
