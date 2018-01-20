import React from 'react';
import { FlatList, Text, View } from 'react-native';
import ResultsCell from './ResultsCell';

class ResultsListView extends React.Component {

    // Properties

    state = {
        selectedRoundId: null,
        results: [],
    };

    // Life cycle methods

    componentWillMount() {
        // ALEX_TODO: build fake data
        this.setState({
            selectedRoundId: null,
            results: [
                { roundId: 0, roundName: 'VEGAS 300', date: 'April 20', score: '258/300' },
                { roundId: 1, roundName: 'VEGAS 300', date: 'April 19', score: '272/300' },
                { roundId: 2, roundName: 'NFAA 300', date: 'April 1', score: '271/300' },
            ]
        });
    }

    //  Interaction

    didSelectRowCallback = (roundId) => {
        this.setState({ selectedRoundId: roundId });
    }

    // Rendering

    keyItemExtractor = (item) => item.roundId
    renderItem = ({ item }) => (
        <ResultsCell didSelectRowCallback={this.didSelectRowCallback} {...item} />
    )

    render() {
        return (
            <View>
                <FlatList
                    data={this.state.results}
                    keyExtractor={this.keyItemExtractor}
                    renderItem={this.renderItem}
                />
                <Text>
                    selectedRoundId: ({this.state.selectedRoundId})
                </Text>
            </View>
        );
    }

}

export default ResultsListView;
