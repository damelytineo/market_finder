import React, { Component } from 'react';
import Market from '../markets/Market'

class MarketCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMarket: true,
        }
    }

    render() {
        return (
            <div>
                {this.state.displayMarket ? <Market market={this.props.market} userMarkets={this.props.userMarkets} /> :
                    <div>
                        <p>{this.props.market.name}</p>
                        <p>{this.props.market.street_address}</p>
                        <p>{this.props.market.borough}</p>
                        <button value={this.props.market.id} onClick={() => this.setState({ displayMarket: true })}>MORE...</button>
                        <br />
                    </div>}
            </div>
        );
    }
}

export default MarketCard;

