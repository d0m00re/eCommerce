import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom';
import styled from "styled-components";

import Theme from './../../../Style/ThemeV2';

interface IButtonProps {
  size : 'small' | 'medium' | 'big';
};

/*
      font-size: 22px;
      line-height: 24px;
*/
export const StyledButton = styled.div<IButtonProps>` 
  display : inline-block;
  padding : 3px;
  border-radius : 80px;
  background-image: linear-gradient(65deg, #edb8ff, #6148ff);
  box-shadow: 0 24px 34px 0 rgba(74, 58, 255, 0.05), 0 9px 24px 0 rgba(0, 0, 0, 0.45);

  transition: transform 350ms ease, -webkit-transform 350ms ease;

  &:hover {
        transform : scale(0.94);
        transition: transform 350ms ease, -webkit-transform 350ms ease;
    }

  & > a {
    display : inline-block;

      background-color : red;
      padding : ${props => (props.size === 'big') ? '26px 72px' : '20px 20px'};
      border-radius : 80px;
      background-color : ${Theme.button.backgroundColor};
      color : ${Theme.button.color};
      text-decoration : none;


      font-size : ${props => (props.size === 'big') ? '22px' : '16px'};
      line-height : ${props => (props.size === 'big') ? '24px' : '18px'};


      font-weight: 700;
  }

`;

export interface IGenButtonProps {
    text : string;
    href ?: string;
    size ?: 'small' | 'medium' | 'big';

    onClick ?: () => any;
  };
  
  

  //       <a  href={href} onClick={onClick}>{text}</a>

function GenButton ({onClick = () => {}, text, href = '', size = 'small'} : IGenButtonProps) {
  const history = useHistory();
   
  const go = () => {
      onClick();
      history.push(href);
  };
  
    return ( 
     <StyledButton size = {size}>
       <a onClick={go}>{text}</a>
     </StyledButton>
    );
  };

export default GenButton;
