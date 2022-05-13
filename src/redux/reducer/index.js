//tong hop cac reducers con lai

import { combineReducers } from "redux";
import postReducer from "./postReducer";
import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
    key: 'root',
    storage,
    whitelist:['loginedUser','doctor','allCode']
  }
// combineReducers de tong hop lai tat ca ca reducer 
const rootReducers = combineReducers({
   
    post:postReducer,

});

const persistedReducer = persistReducer(persistConfig, rootReducers)

const  store = createStore(persistedReducer);
export const persistor = persistStore(store);

export default store;

// export default rootReducers;