import React, { useState } from 'react';
import MarketCard from '../markets/MarketCard';
import Form from 'react-bootstrap/Form';


const Markets = (props) => {
    let [filteredMarkets, setFilteredMarkets] = useState([]);
    let [allMarkets, showAllMarkets] = useState(true);

    const filterByBorough = (borough) => {
        setFilteredMarkets(props.markets.filter(market => market.borough === borough));
    }

    const handleOnChange = (e) => {
        let borough = (e.target.value);
        filterByBorough(borough);
        showAllMarkets(false);
    }
    return (
        <div>
            <Form>
                <Form.Select onChange={handleOnChange} defaultValue={'default'}>
                    <option value="default" disabled="disabled"> Filter by Borough </option>
                    <option value="Brooklyn">Brooklyn</option>
                    <option value="Queens">Queens</option>
                    <option value="Manhattan">Manhattan</option>
                    <option value="Bronx">Bronx</option>
                    <option value="Staten Island">Staten Island</option>
                </Form.Select>
            </Form>

            {(allMarkets) ?
                props.markets.map(market =>
                    <div key={market.id}>
                        <MarketCard market={market} userMarkets={props.userMarkets} />
                        <hr />
                    </div>
                )
                :
                filteredMarkets.map(market =>
                    <div key={market.id}>
                        <MarketCard market={market} userMarkets={props.userMarkets} />
                        <hr />
                    </div>
                )
            }
        </div>
    );
};

export default Markets;