import styled from "styled-components";


// Perso Theme
let Theme = {
    root: {
        backgroundColor: '#0f0823'
    },
    h1: {
        color: '#fff',
    },
    h2: {
        color: '#fff',
    },
    h3: {
        color: '#fff'
    },
    text: {
        color: 'rgb(190, 189, 212)'
    },
    button: {
        color: '#fff',
        backgroundColor: '#0f0823',
    },
    ul: {
        color: '#0f0823',
        puceColor: '#8e20f1'
    },
};

//-THEME
// MAIN TITLE
export const StyledTitle = styled.h1` 
color : ${Theme.h1.color};
margin-top : 0px;
margin-bottom : 24px;
font-size : 100px;
line-height : 105px;
font-weight : 700;
`;

// SUBTITLE
export const StyledSubtitle = styled.h2` 
margin-top : 0px;
color : ${Theme.h2.color};
font-size: 76px;
line-height: 88px;
font-weight: 700;
`;

// small title
export const StyledSmallTitle = styled.h3` 
margin-top: 0px;
margin-bottom: 20px;
color: ${Theme.h3.color};
font-size: 36px;
line-height: 38px;
font-weight: 700;
`;

export const StyledVerySmallTitle = styled.h4` 
font-size: 22px;
line-height: 28px;
 margin : 0;
padding : 0;
color : #fff;
font-weight : 700;
`;

// DESCRIPTION - medium text
export const StyledDescription = styled.p` 
color : ${Theme.text.color};
font-size : 24px;
line-height : 38px;
margin-top : 0;

`;

// SUBTITLE -medium text


// CITATION - small text
export const StyledCitation = styled.p`
color : ${Theme.text.color};
margin-bottom : 0px;
margin-top: 0px;
line-height: 30px;
`;

//------------------------------------------------------------------

// BASIC FLEXBOX
export const StyledFlexRow = styled.div` 
display : flex;
flex-direction : row;
    justify-content : center;
    align-items : center;
`;

export const StyledFlexColumn = styled.div` 
display : flex;
flex-direction : column;
`;


// SPECIFIC ELEM FLEXBOX
export const StyledFlexRowCard = styled(StyledFlexRow)` 
display : flex;
flex-direction : row;
`;

export const StyledFlexColumnCard = styled(StyledFlexColumn)` 
display : flex;
flex-direction : column;
`;

// GENERAL LAYOUT STYLE 
// MAIN STYLE
export const StyledMain = styled.main` 
background-color : ${Theme.root.backgroundColor};
`;

export const StyledButton = styled.div` 
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

export const StyledNavBar = styled.nav`

    & > ul {
        display : flex;
        margin-bottom: 0px;
        padding-left: 0px;
        margin-top : 0px;
        & > li {
            margin-right: 24px;
            margin-left: 24px;
            list-style-type : none;
            & > a {
                transition: color 350ms ease;
                line-height : 20px;
                color : #fff;
                background-color : transparent;
                text-decoration : none;

                &:hover {
                    color : ${Theme.text.color};
                }
            }
        }
    }
`;

export const StyledBlockLayout = styled.div` 
    width : 100%;
    max-width : 1244px;
    padding-left : 24px;
    padding-right : 24px;
    margin-right: auto;
    margin-left: auto;
    padding-bottom : 220px;
`;
export const StyledGridMe = styled.div` 
    display : grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 2fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
`;

export const StyledGridMeFirstCol = styled.div` 
    transform-style: preserve-3d;
    opacity: 1;
`;

// About ME


export const StyledAboutMe = styled.div` 
    display : grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
`;


export const StyledNftGallery = styled.div` 
    display : grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
`;



export const StyledGetInTouch = styled.div` 
    display : grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
`;

export default Theme; 