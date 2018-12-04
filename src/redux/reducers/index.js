import todos from './todos';
import users from './users';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    todoReducerState: todos,
    userReducerState: users
});

export default rootReducer;