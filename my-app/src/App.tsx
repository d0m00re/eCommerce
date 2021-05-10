import React, {useRef} from 'react';
import './App.css';
import useMouse from '@react-hook/mouse-position'

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

import Animation from './ComponentV2/Atoms/Animation/Animation';
import { posix } from 'path';

import ScrollAnimation from 'react-animate-on-scroll';


function App() {
  const ref = useRef(null)
  const mouse : any = useMouse(ref, {
      enterDelay: 42,
      leaveDelay: 42,
  });



  return (
    <StyledMain ref={ref}>
      <Animation x = {mouse.x} y = {mouse.y} imgPath = 'buble'  bottom={42} right={12}
                scalePosX = {(pos : number) => {return (pos / 20 - 20)}}
                scalePosY = {(pos : number) => {return (pos / 20 - 20)}}/>
                {/*
      <Animation x = {mouse.x} y = {mouse.y} imgPath = 'donut'  bottom={62} right={22}
                scalePosX = {(pos : number) => {return -(pos / 20 - 20)}}
                scalePosY = {(pos : number) => {return -(pos / 20 - 20)}}/>
                */}
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
