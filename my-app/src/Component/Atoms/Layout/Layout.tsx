import React, { ReactElement } from 'react'
import styled from "styled-components";
import ListArticles from './../../Molecules/ArticlesList/ArticlesList';
import dataListArticles from './../../../Data/articles';

const MyLayout = styled.main `
    background-color : red;
    width : 100vw;
    height : 100vh;
`;

const genDiv = styled.div `
      border-radius: 5px;
`

const Header = styled(genDiv) `
    grid-area : Header;
    background-color : blue;
`;

const Sidebar = styled(genDiv) `
    grid-area : Sidebar;
    background-color : red;
`;

const Content = styled(genDiv) ` 
    grid-area : Content;
    background-color : cyan;

`;

const Grid = styled.div `
    display : grid;
    grid-gap: 12px;
    margin: 12px;
    grid-template-columns: 20vw 1fr;
     grid-template-rows: 10vh 45vh 45vh;
    grid-template-areas : 
        "Header Header Header Header"
        "Sidebar Content Content Content"
        "Sidebar Content Content Content"
`;
  
interface Props {
    
}

function Layout({}: Props): ReactElement {
    return (
       <Grid>
        <Header>
            Header
        </Header>
        <Sidebar>
            Sidebar
        </Sidebar>
        <Content>
            <ListArticles articles={dataListArticles} />
        </Content>
        </Grid>
    )
}

export default Layout
