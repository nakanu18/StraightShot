import React, { Component } from 'react';
import { View } from 'react-native';
import ResultsCell from './ResultsCell';

class ResultsListView extends Component {

    // Properties

    state = { results: [] };

    // Life cycle methods

    componentWillMount() {
        // ALEX_TODO: build fake data
        this.setState({ results: [
            { roundId: 0, roundName: 'VEGAS 300', date: 'April 20', score: '258/300' },
            { roundId: 1, roundName: 'VEGAS 300', date: 'April 19', score: '272/300' },
            { roundId: 2, roundName: 'NFAA 300', date: 'April 1', score: '271/300' },
        ] });
    }

    // Render methods

    renderResults() {
        return this.state.results.map(result =>
            <ResultsCell key={result.roundId} {...result} />
        );
    }

    render() {
        return (
            <View>
                {this.renderResults()}
            </View>
        );
    }

}

export default ResultsListView;
