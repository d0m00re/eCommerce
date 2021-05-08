import {IArticle, IArticleBasket} from './../../Types/IArticle';
import * as constants from './../constants/Basket';
/*
articles : list of articles and count of each
    an user could :
        * add an article
        * add multiple same article
        * delete one article
        * remove article
totalPrice : tottal price an user need to spend for all articles
    * calculate each when an user open basket
*/
interface IReducerBasket {
    articlesList : IArticleBasket[];
    totalPrice : number;
}

const initialState : IReducerBasket  = {
    articlesList : [],
    totalPrice : 0
};

const BasketReducer = (state : IReducerBasket = initialState, action : {type : string, payload : any}) : IReducerBasket => {
    switch(action.type) {
        case constants.ARTICLE_ADD :
            return state;
        case constants.ARTICLE_DELETE:
            return state;
        case constants.ARTICLE_INCR_QUANTITY:
            return state; 
        case constants.ARTICLE_DECR_QUANTITY:
            return state;
    }
    return state;
}

export default BasketReducer;