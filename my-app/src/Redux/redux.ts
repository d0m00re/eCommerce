import {
    combineReducers,
    createStore,
  } from 'redux';
  
  import {composeWithDevTools} from 'redux-devtools-extension';

  import ReducerBasket from './reducers/Basket';

  export const defaultState = {
    basket : ReducerBasket
    //   gameRoom : GameRoomReducer
  };
  
  
  export const reducers = combineReducers(defaultState);
  
  export function configureStore(initialState = {}) {  
  
    const store = createStore(reducers, composeWithDevTools());
                              return store;
  };
  
  export const store = configureStore();