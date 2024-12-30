import React, { useState } from "react";
import Market from "../markets/Market";

const MarketCard = (props) => {
  let [displayMarket, setDisplayMarket] = useState(false);

  const handleDisplay = () => {
    setDisplayMarket(true);
  };

  return (
    <div>
      {displayMarket ? (
        <Market market={props.market} userMarkets={props.userMarkets} />
      ) : (
        <div>
          <p>{props.market.name}</p>
          <p>{props.market.street_address}</p>
          <p>{props.market.borough}</p>
          <button
            className="btn"
            value={props.market.id}
            onClick={handleDisplay}
          >
            MORE...
          </button>
        </div>
      )}
    </div>
  );
};

export default MarketCard;
