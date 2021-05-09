import * as constant from './../constants/Basket';
import {IArticle, IArticleBasket} from './../../Types/IArticle';
import { constants } from 'buffer';


export const articleAdd = (payload : {article : IArticle, count : number}) : {type : string,
                                                    payload : IArticleBasket} => ({
    type : constant.ARTICLE_ADD,
    payload : {article : payload.article, count : payload.count}
});

// uuid
export const articleDelete = (uuid : string ) : {type : string, payload : string} => ({
    type : constant.ARTICLE_DELETE,
    payload : uuid
});

// uuid + quantity
export const  articleIncrQuantity = (nb : number) : {type : string, payload : number} => ({
    type : constant.ARTICLE_INCR_QUANTITY,
    payload : nb
});

export const articleDecrQuantity = (nb : number) : {type : string, payload : number} => ({
    type : constant.ARTICLE_INCR_QUANTITY,
    payload : nb
});

export const showBasket = () => ({
    type : constant.SHOW_BASKET,
    payload : null
});


export const hideBasket = () => ({
    type : constant.HIDE_BASKET,
    payload : null
})

/*
export const articleIncrQuantity = () => { ARTICLE_INCR_QUANTITY = 'ARTICLE_INCR_QUANTITY';}
export const articleDecrQuantity = () => { ARTICLE_DECR_QUANTITY = 'ARTICLE_DECR_QUANTITY';}
*/ 