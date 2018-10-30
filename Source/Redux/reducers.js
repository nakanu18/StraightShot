// @flow

import { combineReducers } from 'redux';
import * as actions from './actions';
import * as types from '../types';

const INITIAL_REDUX_STATE: types.ReduxState = {
    roundInProgress: null,
    savedRounds: [],
};

export function rootReducer(state: types.ReduxState = INITIAL_REDUX_STATE, 
                            actionInfo: types.ActionInfo): types.ReduxState {
    switch (actionInfo.type) {
        case actions.CREATE_ROUND: {
            return { 
                ...state,
                savedRounds: [
                    actionInfo.payload,
                    ...state.savedRounds,
                ],
            };
        }
        case actions.UPDATE_ROUND:
        case actions.DELETE_ROUND:
        default:
            return state;
    }
}

export const allReducers = combineReducers({
    rootReducer
  });
