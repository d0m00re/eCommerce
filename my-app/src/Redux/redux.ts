import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from 'redux';
  
  import {composeWithDevTools} from 'redux-devtools-extension';
  
  /*
  import GameReducer from './reducers/Game';
  import GeneralSocketInfoReducer from './reducers/GeneralSocketInfo';
  import UserReducer from './reducers/User';
  import GameRoomReducer from './reducers/GameRoom';
  
  import SocketClient from './middleware/socketIO';
*/

  import ReducerBasket from './reducers/Basket';

  export const defaultState = {
    basket : ReducerBasket
    //   gameRoom : GameRoomReducer
  };
  
  
  export const reducers = combineReducers(defaultState);
  
  export function configureStore(initialState = {}) {  
  
    const store = createStore(reducers, composeWithDevTools());
  //  const store = createStore(reducers, composeWithDevTools(applyMiddleware(SocketClient)));
                              return store;
  };
  
  export const store = configureStore();