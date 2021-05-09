import { IArticle, IArticleBasket } from './../../Types/IArticle';
import IPayloadIncrDecr from './../../Types/IPayloadIncrDecr';
import * as constants from './../constants/Basket';
import IReducerBasket from './../../Types/IReducerBasket';
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
/*
interface IReducerBasket {
    articlesList : IArticleBasket[];
    totalPrice : number;
    showBasket : boolean;
} 
*/

const initialState: IReducerBasket = {
    articlesList: [],
    totalPrice: 0,
    showBasket: false
};

const BasketReducer = (state: IReducerBasket = initialState, action: { type: string, payload: any }): IReducerBasket => {
    let newState: IReducerBasket;
    let indexArt : number;
    

    switch (action.type) {
        case constants.ARTICLE_ADD:
            let newPayload: IArticleBasket = action.payload;

            // get id if - 1 then article d ont exist
            let id = state.articlesList.findIndex(({ article }) => article._uuid === newPayload.article._uuid);
            // 2 case
            // article don t exist
            let articleList: IArticleBasket[] = [];
            if (id === -1) {
                articleList = [...state.articlesList, newPayload];
            }
            // article exist
            else {
                articleList = [...state.articlesList];
                articleList[id].count += newPayload.count;
            }

            return {
                articlesList: articleList,
                showBasket: true,
                totalPrice : state.totalPrice + newPayload.article.price * newPayload.count
            };

        case constants.ARTICLE_DELETE:
            let uuidDelete: { uuid: string } = action.payload;//            console.log('DELETE : ' + uuidDelete)
     
            let idDelete = state.articlesList.findIndex((_art) => _art.article._uuid === uuidDelete.uuid);

            if (idDelete === -1)
                return state;
   
            let decrPrice = state.articlesList[idDelete].count * state.articlesList[idDelete].article.price; 

            newState = {
                ...state,
                articlesList: state.articlesList.filter((_art) => _art.article._uuid !== uuidDelete.uuid),
                totalPrice : state.totalPrice - decrPrice
            }
            return (newState);

        case constants.ARTICLE_INCR_QUANTITY:
            let incrQt: IPayloadIncrDecr = action.payload;
            indexArt = state.articlesList.findIndex((_art) => _art.article._uuid === incrQt.uuid);


            if (indexArt === -1)
                return state;

            let addMoney = state.articlesList[indexArt].article.price;

            newState = {
                ...state,
            };

            newState.articlesList[indexArt] = {      ...newState.articlesList[indexArt],
                                                count : newState.articlesList[indexArt].count + 1}

            //newState.articlesList[indexArt].count += 1;
            newState.totalPrice += addMoney;
            return newState;

        case constants.ARTICLE_DECR_QUANTITY:
            let decrQt: IPayloadIncrDecr = action.payload;
            indexArt = state.articlesList.findIndex((_art) => _art.article._uuid === decrQt.uuid);

            if (indexArt === -1 || state.articlesList[indexArt].count === 0)
                return state;

            let decrMoney = state.articlesList[indexArt].article.price;

            newState = {
                ...state,
            };

            newState.articlesList[indexArt] = {      ...newState.articlesList[indexArt],
                                                count : newState.articlesList[indexArt].count - 1}

            newState.totalPrice -= decrMoney;
            return newState;


        case constants.SHOW_BASKET:
            return {
                ...state,
                showBasket: true
            }

        case constants.HIDE_BASKET:
            return {
                ...state,
                showBasket: false
            }
    }
    return state;
}

export default BasketReducer; 