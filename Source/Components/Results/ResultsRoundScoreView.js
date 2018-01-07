import React from 'react';
import { View, Text } from 'react-native';

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
    roundScoreViewStyle: {
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    roundScoreFullScoreStyle: {
        fontSize: 16,
    },
    roundScoreDetailStyle: {
        fontSize: 10,
    },
};

export default RoundScoreView;
