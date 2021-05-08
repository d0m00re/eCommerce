import React, { ReactElement } from 'react'
import {IArticle} from './../../../Types/IArticle';

interface Props {
    article : IArticle 
}

function Card({article} : Props) {
    return <p>{article.title}, description : {article.description} price : {article.price}</p>
  }

export default Card
