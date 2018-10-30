// @flow

import * as types from '../types';

// Actions

export const CREATE_ROUND: string = 'CREATE_ROUND';
export const UPDATE_ROUND: string = 'UPDATE_ROUND';
export const DELETE_ROUND: string = 'DELETE_ROUND';

// Action Creators

export function createRound(roundInfo: types.RoundInfo): types.ActionInfo {
    return ({
        type: CREATE_ROUND,
        payload: roundInfo,
    });
}

export function updateRound(roundInfo: types.RoundInfo): types.ActionInfo {
    return ({
        type: UPDATE_ROUND,
        payload: roundInfo,
    });    
}

export function deleteRound(roundInfo: types.RoundInfo): types.ActionInfo {
    return ({
        type: DELETE_ROUND,
        payload: roundInfo,
    });        
}
