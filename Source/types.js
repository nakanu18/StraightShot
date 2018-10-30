// @flow

export type ReduxState = {
    roundInProgress: ?RoundInfo,
    savedRounds: Array<RoundInfo>
}

export type ActionInfo = {
    type: string,
    payload: RoundInfo,
}

export type RoundInfo = {
    roundId: number,
    roundName: string,
    date: string,
    score: string,    
}
