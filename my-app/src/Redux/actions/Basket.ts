import * as constant from './../constants/Basket';
import {IArticle, IArticleBasket} from './../../Types/IArticle';


export const articleAdd = (article : IArticle) : {type : string, payload : IArticleBasket} => ({
    type : constant.ARTICLE_ADD,
    payload : {article : article, count : 1}
});

export const articleDelete = (uuid : string ) : {type : string, payload : string} => ({
    type : constant.ARTICLE_DELETE,
    payload : uuid
});

export const  articleIncrQuantity = (nb : number) : {type : string, payload : number} => ({
    type : constant.ARTICLE_INCR_QUANTITY,
    payload : nb
});

export const articleDecrQuantity = (nb : number) : {type : string, payload : number} => ({
    type : constant.ARTICLE_INCR_QUANTITY,
    payload : nb
});
/*
export const articleIncrQuantity = () => { ARTICLE_INCR_QUANTITY = 'ARTICLE_INCR_QUANTITY';}
export const articleDecrQuantity = () => { ARTICLE_DECR_QUANTITY = 'ARTICLE_DECR_QUANTITY';}
*/