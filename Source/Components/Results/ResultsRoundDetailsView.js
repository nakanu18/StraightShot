import React from 'react';
import { Text, View } from 'react-native';

const ResultsRoundDetailsView = (props) => (
    <View style={styles.roundDetailsViewStyle}>
        <Text style={styles.roundDetailsNameStyle}>
            {props.roundName}
        </Text>

        <Text style={styles.roundDetailsDateStyle}>
            {props.date}
        </Text>
    </View>
);

const styles = {
    roundDetailsViewStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    roundDetailsNameStyle: {
        fontSize: 16,
    },
    roundDetailsDateStyle: {
        fontSize: 10,
    },
};

export default ResultsRoundDetailsView;
