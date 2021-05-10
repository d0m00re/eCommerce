import { Dispatch} from 'react'

import * as actionBasket from './../actions/Basket';

import IPayloadIncrDecr from './../../Types/IPayloadIncrDecr';

export const addArt = (dispatch : Dispatch<any>, payload : {article : any, count : number }) => dispatch(actionBasket.articleAdd(payload));


export const deleteArt = (dispatch : Dispatch<any>, payload : {uuid : string}) => dispatch(actionBasket.articleDelete(payload));
export const incrArt = (dispatch : Dispatch<any>, payload : IPayloadIncrDecr) => dispatch(actionBasket.articleIncrQuantity(payload));
export const decrArt = (dispatch : Dispatch<any>, payload : IPayloadIncrDecr) => dispatch(actionBasket.articleDecrQuantity(payload));
export const show = (dispatch : Dispatch<any>) => dispatch(actionBasket.showBasket());
export const close = (dispatch : Dispatch<any>) => dispatch(actionBasket.hideBasket());