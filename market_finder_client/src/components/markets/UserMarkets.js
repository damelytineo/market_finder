import React, { Component } from 'react';
import MarketCard from './MarketCard';
import Row from 'react-bootstrap/Row';


class UserMarkets extends Component {

    render() {
        return (
            <div>
                <Row>
                    <p>User's saved markets:</p>
                </Row>

                {this.props.userMarkets.map(market =>
                    <Row key={market.id}><MarketCard market={market} userMarkets={this.props.userMarkets} /></Row>
                )}
            </div>
        );
    }
}

export default UserMarkets;