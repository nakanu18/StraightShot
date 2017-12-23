// Import a library to help create a component
import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './Source/Components/Header';

// Create a component
const App = () => (
    <Header headerText="Albums" />
);

// Render the component to the device
AppRegistry.registerComponent('StraightShot', () => App);
