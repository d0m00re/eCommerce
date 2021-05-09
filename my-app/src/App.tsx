import React from 'react';
import logo from './logo.svg';
import './App.css';

import styled from "styled-components";


import Layout from './Component/Atoms/Layout/Layout';
import LandingPage from './Component/Pages/LandingPage/LandingPage';

import {useSelector, useDispatch} from 'react-redux';


import Animation from './Component/Pages/Animation/Animation';

import IReducerBasket from './Types/IReducerBasket';


import * as basketAdapter from './Redux/adapters/BasketAdapter'; 

function App() {
  const dispatch = useDispatch();

  const basket : IReducerBasket = useSelector((state : {basket : IReducerBasket}) => state.basket);

  const StyledRoot = styled.main ` 
        background-image: linear-gradient(to right top, #0f0823, #151234, #1f1845, #291e57, #352369);
  `;


return <StyledRoot>
        <LandingPage />
        <Layout />
      </StyledRoot>
}
export default App;
