// Actions

export const CREATE_ROUND = 'CREATE_ROUND';
export const UPDATE_ROUND = 'UPDATE_ROUND';
export const DELETE_ROUND = 'DELETE_ROUND';

// Action Creators

export function createRound(roundInfo) {
    return { 
        type: CREATE_ROUND,
        roundInfo,
    };
}

export function updateRound(roundInfo) {
    return { 
        type: UPDATE_ROUND,
        roundInfo,
    };    
}

export function deleteRound(roundInfo) {
    return { 
        type: DELETE_ROUND,
        roundInfo,
    };        
}
