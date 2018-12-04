import {ADD_TODO} from '../actions/types';

let initState = {
    todos: []
};

export default (state = initState , action) => {
    switch (action.type) {
        case ADD_TODO:
            return {...state, todos: [...state.todos, action.payload]};    
        default:
            return state;
    }
}