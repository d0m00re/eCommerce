import {IArticleBasket} from './IArticle';

interface IReducerBasket {
    articlesList : IArticleBasket[];
    totalPrice : number;
    showBasket : boolean;
}

export default IReducerBasket;