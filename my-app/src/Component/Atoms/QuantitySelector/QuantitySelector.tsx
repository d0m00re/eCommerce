import React, { ReactElement } from 'react';
import styled from "styled-components";


export interface IPropsQtSelector {
    count : number,
    fIncr : () => void;
    fDecr : () => void;
}

const StyledContainQtSelect = styled.div `
    display : flex;
`;

const StyledDiv = styled.div `
    border : solid;
    padding : 8px;
`;

const StyledIncr = styled(StyledDiv) `
  border-width : 1px 1px 1px 1px;
  border-radius : 0px 10px 10px 0;
  background-color : orange;
  color : black;
`

const StyledCounter = styled(StyledDiv) `
    border-width : 1px 0px 1px 0px;
  width : 100%;
  text-align : center;
`

const StyledDecr = styled(StyledDiv) `
  background-color : orange;
  border-width : 1px 1px 1px 1px;
  border-radius : 10px 0 0 10px;
  color : black;
`
/*
function QuantitySelector({count, fIncr, fDecr}: IPropsQtSelector): ReactElement {
    return (
        <StyledContainQtSelect>
            <button onClick={fDecr}>-</button>
             <div>{count}</div>
            <button onClick={fIncr}>+</button>
        </StyledContainQtSelect>
    )
}
*/

function QuantitySelector({count, fIncr, fDecr}: IPropsQtSelector): ReactElement {
    return (
        <StyledContainQtSelect>
                <StyledDecr onClick={fDecr}> {'<'} </StyledDecr>
                <StyledCounter> {count}</StyledCounter>
                <StyledIncr onClick={fIncr}> {'>'} </StyledIncr>

        </StyledContainQtSelect>
    )
}
export default QuantitySelector
