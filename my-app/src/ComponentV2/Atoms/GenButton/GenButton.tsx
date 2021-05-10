import React, { ReactElement } from 'react'
import { useHistory } from 'react-router-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

import newTheme, { StyledButton} from './../../../Style/ThemeV2';


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
     <StyledButton>
       <a onClick={go}>{text}</a>
      {/*}
       <Redirect push  to={href}>
        {text}
       </Redirect>
      */}
       {/*}
        <Link onClick={() => {onClick()}} to={href}>
          {text}
        </Link>
    */}
     </StyledButton>
    );
  };

export default GenButton;
