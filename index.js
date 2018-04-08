// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import CommonHeaderView from './Source/Components/Common/CommonHeaderView';
import ResultsScreen from './Source/Components/Results/ResultsScreen';

// Create a component
const App = () => (
    <View style={{ flex: 1 }}>
        <CommonHeaderView headerText='Results' />
        <ResultsScreen />
    </View>
);

// Render the component to the device
AppRegistry.registerComponent('StraightShot', () => App);
