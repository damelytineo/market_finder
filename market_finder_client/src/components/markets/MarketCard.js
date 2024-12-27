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
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm cursor-pointer"
            value={props.market.id}
            onClick={handleDisplay}
          >
            MORE...
          </button>
          <br />
        </div>
      )}
    </div>
  );
};

export default MarketCard;
