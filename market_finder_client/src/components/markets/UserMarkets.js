import React, { Component } from 'react';
import MarketCard from './MarketCard'

class UserMarkets extends Component {

    render() {
        return (
            <div>
                <p>User's saved markets:</p>
                {this.props.userMarkets.map(market =>
                    <div key={market.id}>
                        <MarketCard market={market} userMarkets={this.props.userMarkets} />
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

export default UserMarkets;