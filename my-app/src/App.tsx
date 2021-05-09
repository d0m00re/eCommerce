import React from 'react';
import './App.css';

import styled from "styled-components";


import Layout from './Component/Atoms/Layout/Layout';
import LandingPage from './Component/Pages/LandingPage/LandingPage';

function App() {
  const StyledRoot = styled.main ` 
        background-image: linear-gradient(to right top, #0f0823, #151234, #1f1845, #291e57, #352369);
  `;


return <StyledRoot>
        <LandingPage />
        <Layout />

      </StyledRoot>
}
export default App;
