import React, { useState } from 'react';
import Market from '../markets/Market';
import Button from 'react-bootstrap/Button';


const MarketCard = (props) => {
    let [displayMarket, setDisplayMarket] = useState(false);

    const handleDisplay = () => {
        setDisplayMarket(true);
    }

    return (
        <div>
            {displayMarket ? <Market market={props.market} userMarkets={props.userMarkets} /> :
                <div>
                    <p>{props.market.name}</p>
                    <p>{props.market.street_address}</p>
                    <p>{props.market.borough}</p>
                    <Button variant="success" value={props.market.id} onClick={handleDisplay}>MORE...</Button>
                    <br />
                </div>}
        </div>
    );
};

export default MarketCard;


