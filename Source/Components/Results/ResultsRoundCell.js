// @flow

import React from 'react';
// $FlowFixMe
import { TouchableOpacity, View, Text } from 'react-native';

import ResultsRoundDetailsView from './ResultsRoundDetailsView';
import ResultsRoundScoreView from './ResultsRoundScoreView';
import * as types from '../../types';

type Props = types.RoundInfo & {
    didSelectRowCallback: Function,
    isSelected: boolean,
}

class ResultsRoundCell extends React.Component<Props> {

    // Interaction

    didTapItem = () => {
        this.props.didSelectRowCallback(this.props.roundId);
    }

    // Rendering

    renderExpandedDetails() {
        if (this.props.isSelected) {
            return <Text>This is the expanded details section\nIt has alot of stuff</Text>;
        }
    }

    render() {
        return (
            <TouchableOpacity
                style={styles.cellStyle}
                onPress={this.didTapItem}
            >
                <View style={{ flexDirection: 'row' }}>
                    <ResultsRoundDetailsView {...this.props} />
                    <ResultsRoundScoreView {...this.props} />
                </View>
                {this.renderExpandedDetails()}
            </TouchableOpacity>
        );
    }

}

const styles = {
    cellStyle: {
        flexDirection: 'column',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
};

export default ResultsRoundCell;
