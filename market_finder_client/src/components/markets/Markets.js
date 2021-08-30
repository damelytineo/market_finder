import React, { Component } from 'react';
import MarketCard from '../markets/MarketCard';
import Form from 'react-bootstrap/Form';


class Markets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredMarkets: [],
        };
    }

    filterByBorough = (borough) => {
        this.setState({ filteredMarkets: this.props.markets.filter(market => market.borough === borough) });
    }

    handleOnChange = (e) => {
        let borough = (e.target.value);
        this.filterByBorough(borough);
    }

    render() {
        return (
            <div>
                <Form>
                    <Form.Select onChange={this.handleOnChange} defaultValue={'default'}>
                        <option value="default" disabled="disabled"> Filter by Borough </option>
                        <option value="Brooklyn">Brooklyn</option>
                        <option value="Queens">Queens</option>
                        <option value="Manhattan">Manhattan</option>
                        <option value="Bronx">Bronx</option>
                        <option value="Staten Island">Staten Island</option>
                    </Form.Select>
                </Form>
                {this.state.filteredMarkets.map(market =>
                    <div key={market.id}>
                        <MarketCard market={market} userMarkets={this.props.userMarkets} />
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

export default Markets;

