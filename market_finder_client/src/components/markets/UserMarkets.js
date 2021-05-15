import React, { Component } from 'react';
import MarketCard from './MarketCard'

class UserMarkets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            markets: []
        }
    }

    componentDidMount() {
        fetch(`http://localhost:3000/users/${this.props.current_user}/markets`) 
            .then(response => response.json())
            .then(markets => {
                this.setState({ markets: markets });
            });
    }

    render() {
        return (
            <div>
                {this.state.markets.map(market =>
                    <div key={market.id}>
                        <MarketCard market={market} hideAdd={true} />
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

export default UserMarkets;