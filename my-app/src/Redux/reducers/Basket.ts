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
    showBasket : boolean;
} 

const initialState : IReducerBasket  = {
    articlesList : [],
    totalPrice : 0,
    showBasket : false
};

const BasketReducer = (state : IReducerBasket = initialState, action : {type : string, payload : any}) : IReducerBasket => {
    switch(action.type) {
        case constants.ARTICLE_ADD :
            let newPayload : IArticleBasket  = action.payload;

            // get id if - 1 then article d ont exist
            let id = state.articlesList.findIndex(({article}) => article._uuid === newPayload.article._uuid);
            // 2 case
            // article don t exist
            let articleList : IArticleBasket[] = [];
            if (id === -1) {
                articleList =  [...state.articlesList, newPayload];
            }
            // article exist
            else {
                articleList = [...state.articlesList];
                articleList[id].count += newPayload.count;
            } 

            return {
                ...state,
                articlesList : articleList,
                showBasket : true
            };
        case constants.ARTICLE_DELETE:
            return state;
        case constants.ARTICLE_INCR_QUANTITY:
            return state; 
        case constants.ARTICLE_DECR_QUANTITY:
            return state;

        case constants.SHOW_BASKET:
            return {
                ...state,
                showBasket : true
            }

        case constants.HIDE_BASKET:
            return {
                ...state,
                showBasket : false
            }
    }
    return state;
}

export default BasketReducer; 