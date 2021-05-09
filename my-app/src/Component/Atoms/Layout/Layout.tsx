import React, { ReactElement, useEffect, useState } from 'react'
import styled from "styled-components";
import ListArticles from './../../Molecules/ArticlesList/ArticlesList';
import dataListArticles from './../../../Data/articles';
import ModalBasket from './../../Molecules/ModalBasket/ModalBasket';
import {useSelector, useDispatch} from 'react-redux';
import IReducerBasket from './../../../Types/IReducerBasket';
import * as actions from './../../../Redux/actions/Basket';

import Button from './../../Atoms/Button/Button';

import BasketSeparator from './../../Particles/SeparatorWithBasket/SeparatorWithBasket';

const genDiv = styled.div `
      border-radius: 5px;
`

const Header = styled(genDiv) `
    grid-area : Header;
`;

const Sidebar = styled(genDiv) `
    grid-area : Sidebar;
`;

const Sidebar2 = styled(genDiv) `
    grid-area : Sidebar2;
`;

const Content = styled(genDiv) ` 
    grid-area : Content;
    background-color : rgba(0,0,0,0.2);

`;
/*
   "Header Header Header Header"
        "Sidebar Content Content Content"
        "Sidebar Content Content Content"
*/
const Grid = styled.div `
    display : grid;
    grid-gap: 12px;
    margin: 12px;
    grid-template-columns: 18vw 30vw 30vw 19vw;
     grid-template-rows: 5vh 45vh 45vh 5vh;
    grid-template-areas : 
        "Header Header Header Header"
        "Sidebar Content Content Sidebar2"
        "Sidebar Content Content Sidebar2";
`;
  
interface Props { 
    
}

function Layout({}: Props): ReactElement {
    const basket : IReducerBasket = useSelector((state : {basket : IReducerBasket}) => state.basket);
    const dispatch = useDispatch();
    const closeBasket = () => dispatch(actions.hideBasket());

    return (
        <>
    <BasketSeparator dispatch={dispatch} />        
       <Grid>
           <Header>
                <a href='#market'></a>
                <ModalBasket basket = {basket} onClose={closeBasket} />
           </Header>

        <Sidebar>
            
        </Sidebar>

        <Sidebar2>
            
        </Sidebar2>
        
        <Content>
            <ListArticles articles={dataListArticles} />
        </Content>
        </Grid>
        </>
    )
}

export default Layout
