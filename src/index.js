import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "./App.css";
import { Provider } from "react-redux";
import Store from "./redux/store";

let storeInstance = Store();

ReactDOM.render(
    <Provider store={storeInstance}>
        <App/>
    </Provider>
    , document.getElementById('root')
);
