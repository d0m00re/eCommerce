import React from 'react';
import logo from './logo.svg';
import './App.css';
import {IArticle} from './Types/IArticle';
import Modal from './Component/Atoms/Modal';
import ArticlesList from './Component/Molecules/ArticlesList/ArticlesList';
interface Props {
  articles : IArticle[]
}

let data : IArticle[] = [
  {description : 'article1', title : 'Apple', price : 69},
  {description : 'article2', title : 'Cake', price : 42},
  {description : 'article3', title : 'Wood', price : 77},
  {description : 'article4', title : 'Windobe', price : 44}
]

interface PropsArticle {
  article : IArticle
}

function Card({article} : PropsArticle) {
  return <p>{article.title}, description : {article.description} price : {article.price}</p>
}

function ShowArticles({articles} : Props) {
  return (
    <div>
    {

      articles.map((elem : IArticle) => (<Card article={elem}></Card>))
      
    }
    </div>
    )
}

function App() {
  return (
    <div className="App"> 
      E COMERCE SITE OLOL
      <ArticlesList articles={data}/>
    </div>
  );
}

export default App;
