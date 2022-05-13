import React from 'react';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import {persistor} from './redux/reducer/index'
import store from './redux/reducer/index'
import 'bootstrap/dist/css/bootstrap.css';


ReactDOM.render(
  
  <Provider store ={store}>
  
  <PersistGate loading={null} persistor={persistor}>

           <App/>
      </PersistGate>
        
  </Provider>
  ,
  document.getElementById('root')
);
