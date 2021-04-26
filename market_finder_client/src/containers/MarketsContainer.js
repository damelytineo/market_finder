import React, { Component } from 'react';
import Markets from '../components/Markets'

class MarketsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markets: []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3000/markets')
            .then(response => response.json())
            .then(markets => {
                this.setState({markets: markets});
            });
    }

    render() {
        return (
            <Markets markets={this.state.markets} />
        );
    }
}

export default MarketsContainer;