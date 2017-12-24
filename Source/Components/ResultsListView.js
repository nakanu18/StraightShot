import React, { Component } from 'react';
import { View } from 'react-native';
import ResultsCell from './ResultsCell';

class ResultsListView extends Component {

    componentWillMount() {
    }

    render() {
        const score0 = { roundName: 'VEGAS 300', date: 'April 20', score: '258/300' };
        const score1 = { roundName: 'VEGAS 300', date: 'April 19', score: '272/300' };
        const score2 = { roundName: 'NFAA 300', date: 'April 1', score: '271/300' };

        return (
            <View>
                <ResultsCell {...score0} />
                <ResultsCell {...score1} />
                <ResultsCell {...score2} />
            </View>
        );
    }

}

export default ResultsListView;
