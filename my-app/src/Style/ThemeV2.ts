import styled from "styled-components";


// Perso Theme
let Theme = {
    root : {
      backgroundColor : '#0f0823'
    },
    h1 : {
      color : '#fff',
    },
    h2 : {
      color : '#fff',
    },
    text : {
      color : 'rgb(190, 189, 212)'
    },
    button: {
      color : '#fff',
      backgroundColor : '#0f0823',
    },
    ul: {
      color : '#0f0823',
      puceColor : '#8e20f1'
    },
  };

  //-THEME
  // MAIN TITLE
export const StyledTitle = styled.h1 ` 
color : ${Theme.h1.color};
margin-top : 0px;
margin-bottom : 24px;
font-size : 100px;
line-height : 105px;
font-weight : 700;
`;

// SUBTITLE
export const StyledSubtitle = styled.h2 ` 
margin-top : 0px;
color : ${Theme.h2.color};
font-size: 76px;
line-height: 88px;
font-weight: 700;
`;

// DESCRIPTION - medium text
export const StyledDescription = styled.p ` 
color : ${Theme.text.color};
font-size : 24px;
line-height : 38px;
margin-top : 0;

`;

// SUBTITLE -medium text


// CITATION - small text
export const StyledCitation = styled.p `
color : ${Theme.text.color};
margin-bottom : 0px;
margin-top: 0px;
`;

//------------------------------------------------------------------

// BASIC FLEXBOX
export const StyledFlexRow = styled.div ` 
display : flex;
flex-direction : row;
`;

export const StyledFlexColumn = styled.div ` 
display : flex;
flex-direction : column;
`;


// SPECIFIC ELEM FLEXBOX
export const StyledFlexRowCard = styled(StyledFlexRow) ` 
display : flex;
flex-direction : row;
`;

export const StyledFlexColumnCard = styled(StyledFlexColumn) ` 
display : flex;
flex-direction : column;
`;

// GENERAL LAYOUT STYLE 
// MAIN STYLE
export const StyledMain = styled.main ` 
background-color : ${Theme.root.backgroundColor};
`;

export const StyledButton = styled.div ` 
  display : inline-block;
  padding : 3px;
  border-radius : 80px;
  background-image: linear-gradient(65deg, #edb8ff, #6148ff);
  box-shadow: 0 24px 34px 0 rgba(74, 58, 255, 0.05), 0 9px 24px 0 rgba(0, 0, 0, 0.45);

  & > a {
    display : inline-block;

      background-color : red;
      padding : 26px 72px;
      border-radius : 80px;
      background-color : ${Theme.button.backgroundColor};
      color : ${Theme.button.color};
      text-decoration : none;

      font-size: 22px;
line-height: 24px;
font-weight: 700;
  }

`;

export default Theme;