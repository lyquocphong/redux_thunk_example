import {ADD_TODO} from './types';

export const addNewTodo = (newTodo) => {
    return {
        type: ADD_TODO,
        payload: newTodo
    }
}