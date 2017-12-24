import React from 'react';
import { View, Text } from 'react-native';

const ResultsCell = (props) => (
    <View style={styles.cellStyle}>
        <RoundDetailsView {...props} />
        <RoundScoreView {...props} />
    </View>
);

const RoundDetailsView = (props) => (
    <View style={styles.roundDetailsViewStyle}>
        <Text style={styles.roundDetailsNameStyle}>
            {props.roundName}
        </Text>

        <Text style={styles.roundDetailsDateStyle}>
            {props.date}
        </Text>
    </View>
);

const RoundScoreView = (props) => (
    <View style={styles.roundScoreViewStyle}>
        <Text style={styles.roundScoreFullScoreStyle}>
            {props.score}
        </Text>
        <Text style={styles.roundScoreDetailStyle}>
            Details
        </Text>
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
    roundDetailsViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#00FF00',
    },
    roundDetailsNameStyle: {
        fontSize: 16,
    },
    roundDetailsDateStyle: {
        fontSize: 10,
    },
    roundScoreViewStyle: {
        justifyContent: 'center',
        alignItems: 'flex-start',
        backgroundColor: '#FF0000',
    },
    roundScoreFullScoreStyle: {
        fontSize: 16,
    },
    roundScoreDetailStyle: {
        fontSize: 10,
    },
};

export default ResultsCell;
