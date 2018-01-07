import React from 'react';
import { View } from 'react-native';
import ResultsRoundDetailsView from './ResultsRoundDetailsView';
import ResultsRoundScoreView from './ResultsRoundScoreView';

const ResultsCell = (props) => (
    <View style={styles.cellStyle}>
        <ResultsRoundDetailsView {...props} />
        <ResultsRoundScoreView {...props} />
    </View>
);

const styles = {
    cellStyle: {
        flexDirection: 'row',
        backgroundColor: '#F8F8F8',
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
