import React, { Component } from 'react';

class Markets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filteredMarkets: [],
        };
        this.markets = [];
    }

    componentDidMount() {
        fetch('http://localhost:3000/markets')
            .then(response => response.json())
            .then(markets => {
                this.markets = markets;
            });
    }

    filterByBorough = (borough) => {
        this.setState({ filteredMarkets: this.markets.filter(market => market.borough === borough) });
    }

    handleOnChange = (e) => {
        let borough = (e.target.value);
        this.filterByBorough(borough);
    }

    handleClick = (id) => {
        let configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify({ "market_id": id })
        }

        fetch('http://localhost:3000/user_markets', configObj)
            .then(response => response.json())
            .then(marketData => {
                console.log(marketData);
                //HANDLE DATA
            });
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
                        <p>{market.borough}</p>
                        <p>{market.name}</p>
                        <br />
                        <p>{market.address}</p>
                        <button value={market.id} onClick={() => this.handleClick(market.id)}>{market.id}ADD</button>
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

export default Markets;

