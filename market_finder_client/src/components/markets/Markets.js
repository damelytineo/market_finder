import React, { Component } from 'react';
import MarketCard from '../markets/MarketCard';

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
                <form>
                    <div>
                        <select onChange={this.handleOnChange} defaultValue={'default'}>
                            <option value="default" disabled="disabled"> -- Filter by borough--</option>
                            <option>Brooklyn</option>
                            <option>Queens</option>
                            <option>Manhattan</option>
                            <option>Bronx</option>
                            <option>Staten Island</option>
                        </select>
                    </div>
                </form>
                <br />
                <br />
                {this.state.filteredMarkets.map(market =>
                    <div key={market.id}>
                        <MarketCard market={market} />
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

export default Markets;

