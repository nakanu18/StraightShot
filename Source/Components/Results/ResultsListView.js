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
            { roundName: 'VEGAS 300', date: 'April 20', score: '258/300' },
            { roundName: 'VEGAS 300', date: 'April 19', score: '272/300' },
            { roundName: 'NFAA 300', date: 'April 1', score: '271/300' },
        ] });
    }

    renderResults() {
        return this.state.results.map(result => <ResultsCell {...result} />);
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
