import React, { ReactElement } from 'react'
import Card from '../Card/Card';
import {IArticle} from '../../../Types/IArticle'
import styled from 'styled-components';

const FlexRowContainer = styled.div `
    display : flex;
    flex-direction : row;
    flex-wrap : wrap;
    justify-content : space-evenly;
    width : 100%;
    max-height : 100%;
    overflow-y: scroll;
`;

interface Props {
    articles : IArticle[]
}

function Article({articles}: Props): ReactElement {
    return (
        <FlexRowContainer>
    {
      articles.map((elem : IArticle) => (<Card article={elem}></Card>))
    }
    </FlexRowContainer>
    )
}

export default Article
