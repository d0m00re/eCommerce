import React, { ReactElement } from 'react'
import Card from './../Card/Card';
import {IArticle} from './../../../Types/IArticle'

interface Props {
    articles : IArticle[]
}

function Article({articles}: Props): ReactElement {
    return (
        <div>
    {
      articles.map((elem : IArticle) => (<Card article={elem}></Card>))
    }
    </div>
    )
}

export default Article
