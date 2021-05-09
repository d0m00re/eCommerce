import * as constant from './../constants/Basket';
import {IArticle, IArticleBasket} from './../../Types/IArticle';

import IPayloadIncrDecr from './../../Types/IPayloadIncrDecr';

export const articleAdd = (payload : {article : IArticle, count : number}) : {type : string,
                                                    payload : IArticleBasket} => ({
    type : constant.ARTICLE_ADD,
    payload : {article : payload.article, count : payload.count}
});

// uuid
export const articleDelete = ({uuid} : {uuid : string}) : {type : string, payload : {uuid : string}} => ({
    type : constant.ARTICLE_DELETE,
    payload : {uuid : uuid}
});

// uuid + quantity
export const  articleIncrQuantity = (payload : IPayloadIncrDecr) : {type : string, payload : IPayloadIncrDecr} => ({
    type : constant.ARTICLE_INCR_QUANTITY,
    payload : payload
});

export const articleDecrQuantity = (payload : IPayloadIncrDecr) : {type : string, payload : IPayloadIncrDecr} => ({
    type : constant.ARTICLE_DECR_QUANTITY,
    payload : payload
});

export const showBasket = () => ({
    type : constant.SHOW_BASKET,
    payload : null
});


export const hideBasket = () => ({
    type : constant.HIDE_BASKET,
    payload : null
});