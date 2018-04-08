// Import a library to help create a component
import React from 'react';
import { AppRegistry, View } from 'react-native';
import { Navigation } from 'react-native-navigation';

import ResultsScreen from './Source/Components/Results/ResultsScreen';

Navigation.registerComponent('ResultsScreen', () => ResultsScreen);

Navigation.startTabBasedApp({
  tabs: [
    {
      label: 'One',
      screen: 'ResultsScreen',
      title: 'Results'
    },
    {
      label: 'Two',
      screen: 'ResultsScreen',
      title: 'Screen Two'
    }
  ]
});
