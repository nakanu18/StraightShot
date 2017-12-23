import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>
            {props.headerText}
        </Text>
    </View>
);

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,

        // Not sure what these props are for
        elevation: 2,
        position: 'relative',
    },
    textStyle: {
        fontSize: 20,
    },
};

export default Header;
