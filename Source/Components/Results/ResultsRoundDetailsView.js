import React from 'react';
import { View, Text } from 'react-native';

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

const styles = {
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
};

export default RoundDetailsView;
