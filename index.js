import { Navigation } from 'react-native-navigation';
import { createStore } from 'redux';
import { rootReducer } from './Source/reducers';

import ResultsScreen from './Source/Components/Results/ResultsScreen';
import RoundEditorScreen from './Source/Components/RoundEditor/RoundEditorScreen';

const store = createStore(rootReducer);

Navigation.registerComponent('ResultsScreen', () => ResultsScreen);
Navigation.registerComponent('RoundEditorScreen', () => RoundEditorScreen);

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
