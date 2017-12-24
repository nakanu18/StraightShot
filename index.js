// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import ResultsListView from './Source/Components/ResultsListView';

// Create a component
const App = () => (
    <View>
        <ResultsListView />
    </View>
);

// Render the component to the device
AppRegistry.registerComponent('StraightShot', () => App);
