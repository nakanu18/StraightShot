// @flow

import * as Types from './types';

// ALEX_TODO: break this into more infos
export type ActionInfo = Types.RoundInfo & {
    type: string
}

// Actions

export const CREATE_ROUND: string = 'CREATE_ROUND';
export const UPDATE_ROUND: string = 'UPDATE_ROUND';
export const DELETE_ROUND: string = 'DELETE_ROUND';

// Action Creators

export function createRound(roundInfo: Types.RoundInfo) {
    return { 
        type: CREATE_ROUND,
        roundInfo,
    };
}

export function updateRound(roundInfo: Types.RoundInfo) {
    return { 
        type: UPDATE_ROUND,
        roundInfo,
    };    
}

export function deleteRound(roundInfo: Types.RoundInfo) {
    return { 
        type: DELETE_ROUND,
        roundInfo,
    };        
}
