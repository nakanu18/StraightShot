// @flow

import React from 'react';
// $FlowFixMe
import { Text, View } from 'react-native';

type Props = {
    roundName: string,
    date: string,
}

const ResultsRoundDetailsView = (props: Props) => (
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
