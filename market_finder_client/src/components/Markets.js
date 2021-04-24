import React, { Component } from 'react';

//const marketsUrl = "https://data.cityofnewyork.us/resource/8vwk-6iz2.json"

class Markets extends Component {
    constructor(props) {
        super(props);
        this.state = { filteredMarkets: [] };
        this.markets = [];
    }

    componentDidMount() {
        fetch('http://localhost:3000/markets')
            .then(response => response.json())
            .then(markets => {
               // this.setState({ filteredMarkets: markets })
                this.markets = markets;
            });
    }

    filterByBorough = (borough) => {
        this.setState({ filteredMarkets:  this.markets.filter(market => market.borough === borough)});
    }

    handleOnChange = (e) => {
        let borough = (e.target.value);
        this.filterByBorough(borough);
    }

    // listEach() {
    //     return this.state.list.map(market => 
    //         <div>
    //             <p>{market.borough}</p>
    //             <p>{market.marketname}</p>
    //             <hr />
    //         </div>
    //     );
    // }

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
                {/* {this.listEach()} */}
                {this.state.filteredMarkets.map( (market, index) => //index - unique identifier 
                    <div key={index}>
                        <p>{market.borough}</p>
                        <p>{market.marketname}</p>
                        <hr />
                    </div>
                )}
            </div>
        );
    }
}

export default Markets;