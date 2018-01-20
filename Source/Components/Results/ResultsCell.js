import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import ResultsRoundDetailsView from './ResultsRoundDetailsView';
import ResultsRoundScoreView from './ResultsRoundScoreView';

class ResultsCell extends React.Component {

    // Properties

    // Interaction

    didTapItem = () => {
        this.props.didSelectRowCallback(this.props.roundId);
    }

    // Rendering

    render() {
        return (
            <TouchableOpacity onPress={this.didTapItem}>
                <View style={styles.cellStyle}>
                    <ResultsRoundDetailsView {...this.props} />
                    <ResultsRoundScoreView {...this.props} />
                </View>
            </TouchableOpacity>
        );
    }

}

const styles = {
    cellStyle: {
        flexDirection: 'row',
        paddingTop: 15,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
};

export default ResultsCell;
