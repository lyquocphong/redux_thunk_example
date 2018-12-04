import { applyMiddleware, createStore, compose  } from 'redux';
import rootReducer from './reducers';
import logger  from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

let middlewares = [logger, thunkMiddleware];

export default () => {

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    return createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(...middlewares))        
    )
}