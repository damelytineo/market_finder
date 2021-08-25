import React, { Component } from 'react';
import Market from '../markets/Market'

class MarketCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayMarket: false,
        }
    }

    handleAdd = (id) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ "market_id": id })
        }
    }


    render() {
        return (
            <div>
                {this.state.displayMarket ? <Market market={this.props.market} /> :
                    <div>
                        <p>{this.props.market.name}</p>
                        <p>{this.props.market.street_address}</p>
                        <p>{this.props.market.borough}</p>
                        <button value={this.props.market.id} onClick={() => this.setState({ displayMarket: true })}>MORE...</button>
                        <br />
                        {this.props.hideAdd ? "" : <button value={this.props.market.id} onClick={() => this.handleAdd(this.props.market.id)}>ADD</button>}
                    </div>}
            </div>
        );
    }
}

export default MarketCard;

