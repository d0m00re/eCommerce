import React, { ReactElement } from 'react'

import {
  StyledSubtitle,
  StyledDescription,
  StyledCitation, StyledSmallTitle,
}
from './../../../Style/ThemeV2';

import IWork from './../../../Types/IMyWork';

import styled from "styled-components";

const StyledWorkCard = styled.div ` 
padding: 72px 56px;
border-radius: 50px;
background-color: rgba(255, 255, 255, 0.01);
box-shadow: inset 0 39px 56px -56px rgba(255, 255, 255, 0.25), inset 0 7px 21px 0 rgba(255, 255, 255, 0.2), inset 0 -82px 68px 0 rgba(96, 68, 144, 0.18), inset 0 -98px 100px -108px rgba(202, 172, 255, 0.1), inset 0 4px 18px 0 rgba(154, 146, 210, 0.15), inset 0 1px 40px 0 rgba(227, 222, 255, 0.15);
`;

// MY WORK

export const StyledMyWork = styled.div` 
    display : grid;
    grid-auto-columns: 1fr;
    grid-template-columns: 1fr 1fr;
    -ms-grid-rows: auto auto;
    grid-template-rows: auto auto;
    grid-row-gap: 16px;
    grid-column-gap: 16px;
`;
 
export const FlexboxRowSpaceB = styled.div ` 
    display : flex;
    flex-direction : row;
    justify-content : space-between;
    align-items : center;
`;

export const  StyledMyWorkCitation = styled(StyledCitation) ` 
    max-width : 530px;
    margin-bottom : 63.08px;
    line-height: 30px;
`

interface Props {
    listMyWorks : IWork[];
}


function MyWork({listMyWorks}: Props): ReactElement {
    return (
        <div>
            <FlexboxRowSpaceB>
              <StyledSubtitle>My Work</StyledSubtitle>
             <StyledMyWorkCitation>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt magna non, libero turpis sem vitae et</StyledMyWorkCitation>
            </FlexboxRowSpaceB>
                     <StyledMyWork>
                {
                    listMyWorks.map(((myWork: IWork) => (
                        <StyledWorkCard>
                            <StyledSmallTitle>{myWork.title}</StyledSmallTitle>
                            <StyledDescription>{myWork.desc}</StyledDescription>
                        </StyledWorkCard>
                    )))
                }
            </StyledMyWork>
        </div>
    )
}

export default MyWork
