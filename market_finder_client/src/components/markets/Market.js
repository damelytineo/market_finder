
import React from 'react';

const Market = ({ match, markets }) => {

    if (markets.length === 0) return null

    const market = markets.find(market => market.id == match.params.market_id)

    return (
        <div>
            <h5>{market.name}</h5>
        </div>
    );
};

export default Market;