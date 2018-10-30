// @flow

import React from 'react';
import { connect } from 'react-redux';
// $FlowFixMe
import { FlatList } from 'react-native';
import { NavigationScreenProp, NavigationStateRoute } from 'react-native-navigation';

import ResultsRoundCell from '../Results/ResultsRoundCell';
// import RoundEditorScreen from '../RoundEditor/RoundEditorScreen';
import * as types from '../../types';

type Props = {
    navigator: NavigationScreenProp<NavigationStateRoute>
}

type State = {
    selectedRoundId: ?number,
    results: Array<types.RoundInfo>
}

type RenderItem = {
    item: types.RoundInfo,
}

class ResultsScreen extends React.Component<Props, State> {

    // Life cycle methods

    constructor(props: Props) {
        super(props);

        // this.state = {
        //     selectedRoundId: null,
        //     results: [
        //         { roundId: 0, roundName: 'VEGAS 300', date: 'April 20', score: '258/300' },
        //         { roundId: 1, roundName: 'VEGAS 300', date: 'April 19', score: '272/300' },
        //         { roundId: 2, roundName: 'NFAA 300', date: 'April 1', score: '271/300' },
        //     ]
        // };
    }

    // Interaction

    didSelectRowCallback = (roundId: number) => {
        this.setState({ selectedRoundId: roundId });
        
        this.props.navigator.push({
            screen: 'RoundEditorScreen',
            title: 'Round Editor'
        });
    }

    // Rendering

    keyItemExtractor = (item: types.RoundInfo) => item.roundId
    renderItem = ({ item }: RenderItem) => (
        <ResultsRoundCell
            didSelectRowCallback={this.didSelectRowCallback}
            isSelected={this.state.selectedRoundId === item.roundId}
            {...item}
        />
    )

    render() {
        return (
            <FlatList
                data={this.state.results}
                extraData={this.state}
                keyExtractor={this.keyItemExtractor}
                renderItem={this.renderItem}
            />
        );
    }

}

const mapStateToProps = (state: types.ReduxState) => ({
    results: state.savedRounds
});

export default connect(mapStateToProps)(ResultsScreen);
