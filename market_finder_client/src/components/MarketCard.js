import React from 'react';

const MarketCard = ({ market }) => { //object 

    const handleClick = (id) => {
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

    return (
        <div>
            <p>{market.name}</p>
            <p>{market.street_address}</p>
            <p>{market.borough}</p>
            <button value={market.id} onClick={() => handleClick(market.id)}>ADD</button>
        </div>
    );
};

export default MarketCard;