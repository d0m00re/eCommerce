import React, { useState } from 'react'
import { IArticle } from './../../../Types/IArticle';

import styled from "styled-components";

import { useDispatch } from 'react-redux';

import * as actionBasket from './../../../Redux/actions/Basket';

import QuantitySelector from './../../Atoms/QuantitySelector/QuantitySelector';

import Theme from './../../../Style/Theme';

import Button from './../../../Component/Atoms/Button/Button';

import Separator from './../../Atoms/Separator/Separator';

//import 

/*
todo add padding : 16px on all cart
change color
add good title
change description test
*/

const StyledCard = styled.div`
    display : flex;
    flex-direction : column;
    align-items : center;
    background-color : ${Theme.button.primary.backgroundColor};
    width : 300px;
    position : relative;
    
    padding : 16px;

    border : solid;
    border-color : #9877ea;

    border-radius : 16px;

    transition: background-color 1.0s ease;

`;

const StyledCardHover = styled.div`
    position : absolute;
    top : 0px;
    width : 100%;
    height : 100%;
    visibility : hidden;

    transition: background-color 1.0s ease;
    
 
    ${StyledCard}:hover & {
        visibility : visible;
        
        background-color : rgba(0, 0, 0, 0.8);
        z-index : 42;
        transition: background-color 1.0s ease;

    }
 
`;

const StyledImg = styled.img`
    width: 242px;
    height: 242px;
`;

const StyledPrice = styled.h2`
    position : absolute;
    background-color : orange;
    color : #0f0823;
    top : 8px;
    left : -8px;
    margin : 0;
    padding : 8px 16px;
    z-index : 66;

    box-shadow: 2px 2px 0 0 rgba(0,0,0,0.35);
`;

const StyledDescription = styled.div` 
    color : #bebdd4;
    line-height : 1.4;
`;

const StyledLabel = styled.div`
    color : ${Theme.typo.primary.color};
    padding-left : 10%;
    padding-bottom : 8px;
    color : orange;
`;

const StyledButtonContainer = styled.div`
    display : flex;
    height : 20%;
    flex-direction :row; 
    align-items : center;
    justify-content : center;
`;

const StyledSelectorContainer = styled.div`
    padding-top : 80%;
`

const StyledSelectorWidget = styled.div`
    padding-left : 12.5%;
`;

const StyledFlexRow = styled.div`
    display : flex;
    justify-content : space-between;
    align-items : center;
`;

export const StyledTitle = styled.h3`
    color : orange;

    margin : 8px;
`; 

interface Props {
    article: IArticle
}


/*
            <p>{article.title}, description : {article.description} price : {article.price}, path : {article.pathImg}</p>
*/

function Card({ article }: Props) {

    const [countArt, setCountArt] = useState<number>(1);

    const incrArtc = () => setCountArt(old => old + 1);
    const decrArtc = () => setCountArt(old => (old > 0) ? old - 1 : old);

    const dispatch = useDispatch();

    const addNewArticle = () => {
        dispatch(actionBasket.articleAdd({ article: article, count: countArt }));
        setCountArt(1);
    }

    return (
        <StyledCard>
            <StyledImg src={article.pathImg} />

            <StyledFlexRow>
                <Separator dim={{w : 20, h : 5}} backgroundColor={'#bebdd4'}/>
                <StyledTitle>{article.title}</StyledTitle>
                <Separator dim={{w : 20, h : 5}} backgroundColor={'#bebdd4'}/>
            </StyledFlexRow>
            <StyledDescription>{article.description}</StyledDescription>
            <StyledPrice>{article.price} $</StyledPrice>

            <StyledCardHover>
                <StyledSelectorContainer>
                    <StyledLabel>Quantity:</StyledLabel>

                    <StyledSelectorWidget>
                        <QuantitySelector fIncr={incrArtc} fDecr={decrArtc} count={countArt} />
                    </StyledSelectorWidget>
                </StyledSelectorContainer>
                <StyledButtonContainer>
                    <Button onClick={addNewArticle} sizeElem='medium' variant='primary'>Add Product</Button>
                </StyledButtonContainer>
            </StyledCardHover>

        </StyledCard>
    );

}

export default Card;
