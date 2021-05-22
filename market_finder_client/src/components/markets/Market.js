import React from 'react';
import Map from '../Map'


const Market = ({ match, markets }) => {

    if (markets.length === 0) return null

    const market = markets.find(market => market.id == match.params.market_id)

    return (
        <div>
            <h5>{market.name}</h5>
            <h5>{market.latitude}</h5>
            <h5>{market.longitude}</h5>

            <Map />
        </div>
    );
};

export default Market;

