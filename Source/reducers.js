// @flow

import * as Actions from './actions';

type ReduxState = {
}

export function rootReducer(state: ReduxState = {}, action: Actions.ActionInfo) {
    switch (action.type) {
        case Actions.CREATE_ROUND:
        case Actions.UPDATE_ROUND:
        case Actions.DELETE_ROUND:
        default:
            return state;
    }
}
