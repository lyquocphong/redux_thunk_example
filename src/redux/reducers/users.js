import {FETCH_USERS} from '../actions/types';

let initState = []

export default (state = initState, action) => {
    switch (action.type) {
        case FETCH_USERS:
            return [...state, ...action.payload]
        default:
            return state;
    }
}