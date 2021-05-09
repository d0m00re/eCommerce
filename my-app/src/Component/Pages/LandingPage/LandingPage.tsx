import React, { ReactElement } from 'react';
import styled from "styled-components";
import Button from './../../Atoms/Button/Button';

interface Props {

}

//    background-color : #0f0823;
//    background-color : #0f0823;
//    background-image: linear-gradient(to right top, #0f0823, #151234, #1f1845, #291e57, #352369);


const StyledlandingPage = styled.div`
    width : 100vw;
    height : 100vh;

`;

//    color: #fff;

const StyleMainTitle = styled.h1` 
    margin-top: 0px;
    margin-bottom: 24px;
    font-size: 100px;
    line-height: 105px;
    font-weight: 700;

    color: #fff;
`;

const StyleSubDescription = styled.h3` 
    font-size: 24px;
    line-height: 38px;
    color : #bebdd4;
`;

const StyledHeader = styled.header` 
    height : 20%;
    width : 100%;
`;

const StyledSection = styled.section` 
    display : flex;
    flex-direction : column;
    align-items : center;

`;

const StyledSeparator = styled.div` 
    height : 10px;
    width : 10%;
    background : linear-gradient( cyan, #0f0823);
`;

const StyledFlex = styled.div` 
    padding-top : 5%;
    display : flex;
    flex-direction : row;
    justify-content : center;
`

/*
const StyleMainTitle = styled.h1 ` 

`;
*/

function LandingPage({ }: Props): ReactElement {
    return (
        <StyledlandingPage>
            <StyledHeader>

            </StyledHeader>
            <StyledSection>
                <StyleMainTitle>I'm Jack Lapiquette</StyleMainTitle>
                <StyleSubDescription>It's a web rushing project, 48h for an e-commerce website. Sol lucet omnibus.</StyleSubDescription>
            </StyledSection>
            <StyledFlex>
                <StyledSeparator />
            </StyledFlex>
            <StyledFlex>
                <Button onClick={() => { }} variant='primary'> Browse Store </Button>
            </StyledFlex>

        </StyledlandingPage>
    )
}

export default LandingPage
