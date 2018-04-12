import {
    CREATE_ROUND,
    UPDATE_ROUND,
    DELETE_ROUND,
} from './actions';

export function rootReducer(state = {}, action) {
    switch (action.type) {
        case CREATE_ROUND:
        case UPDATE_ROUND:
        case DELETE_ROUND:
        default:
            return state;
    }
}
