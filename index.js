// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import CommonHeaderView from './Source/Components/Common/CommonHeaderView';
import ResultsListView from './Source/Components/Results/ResultsListView';

// Create a component
const App = () => (
    <View>
        <CommonHeaderView headerText='Results' />
        <ResultsListView />
    </View>
);

// Render the component to the device
AppRegistry.registerComponent('StraightShot', () => App);
