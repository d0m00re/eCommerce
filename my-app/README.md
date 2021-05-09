# Launch project :
cd my-app; npm install; npm start;

## Techno :
* styled component
* reactjs
* redux
* typescript
* font-awesome

## Feature :
* homepage 
* product list
* basket


## redux

### basket reducers

articlesList : store basket articles (count, object who describe an article)

totalPrice : Total basket price

showBasket : show modal or not

```ts
const initialState: IReducerBasket = {
    articlesList: [],
    totalPrice: 0,
    showBasket: false
};
```

#### Adapter module :
goal : API - functional store update.
```ts
export const deleteArt = (dispatch : Dispatch<any>, payload : {uuid : string}) => dispatch(actionBasket.articleDelete(payload));
export const incrArt = (dispatch : Dispatch<any>, payload : IPayloadIncrDecr) => dispatch(actionBasket.articleIncrQuantity(payload));
export const decrArt = (dispatch : Dispatch<any>, payload : IPayloadIncrDecr) => dispatch(actionBasket.articleDecrQuantity(payload));
export const show = (dispatch : Dispatch<any>) => dispatch(actionBasket.showBasket());
export const close = (dispatch : Dispatch<any>) => dispatch(actionBasket.hideBasket());
```
