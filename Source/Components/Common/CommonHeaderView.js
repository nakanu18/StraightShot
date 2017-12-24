import React from 'react';
import { View, Text } from 'react-native';

const CommonHeaderView = (props) => (
    <View style={styles.viewStyle}>
        <Text style={styles.headerTextStyle}>
            {props.headerText}
        </Text>
    </View>
);

const styles = {
    viewStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 25,
        paddingBottom: 15,
        paddingLeft: 15,
        paddingRight: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
    },
    headerTextStyle: {
        fontSize: 24,
    },
};

export default CommonHeaderView;
