import React, { ReactElement, Dispatch } from 'react';
import styled from "styled-components";

import * as basketAdapter from './../../../Redux/adapters/BasketAdapter';

interface Props {
    dispatch : Dispatch<any>;
}

const StyledDivider = styled.div` 
  margin: auto;
  margin-top: 80px;
  width: 80%;
  position: relative;
`;

const StyledShadow = styled.div` 
  overflow: hidden;
  height: 20px;
`;

const StyledOpenBasket = styled.div` 
  width: 70px;
  height: 70px;
  position: absolute;
  bottom: 100%;
  margin-bottom: -35px;
  left: 50%;
  margin-left: -25px;
  border-radius: 100%;
  box-shadow: 0 2px 4px #999;
  background: white;

  &:hover {
    border-color : orange;
    }
`;



const StyledImg = styled.img` 
 position: absolute;
  margin: 4px;
  max-width: 60px;
  border-radius: 100%;
  border: 1px dashed #aaa;


`;

function SeparatorWithBasket({dispatch}: Props): ReactElement {
    return (
        <StyledDivider>
            <StyledShadow></StyledShadow>
            <StyledOpenBasket>
                <StyledImg onClick={() => basketAdapter.show(dispatch)} src="https://images.assetsdelivery.com/compings_v2/luka007/luka0071505/luka007150500204.jpg" />
            </StyledOpenBasket>
        </StyledDivider>
    )
}

export default SeparatorWithBasket
