// @flow

import { Navigation } from 'react-native-navigation';

import ResultsScreen from './Source/Components/Results/ResultsScreen';
import RoundEditorScreen from './Source/Components/RoundEditor/RoundEditorScreen';
import * as actions from './Source/Redux/actions';

Navigation.registerComponent('ResultsScreen', () => ResultsScreen);
Navigation.registerComponent('RoundEditorScreen', () => RoundEditorScreen);

Navigation.startTabBasedApp({
    tabs: [{
        label: 'One',
        screen: 'ResultsScreen',
        title: 'Results'
    }, {
        label: 'Two',
        screen: 'ResultsScreen',
        title: 'Screen Two'
    }]
});

actions.createRound({
    roundId: 0, 
    roundName: 'VEGAS 300', 
    date: 'April 20', 
    score: '258/300',
});
