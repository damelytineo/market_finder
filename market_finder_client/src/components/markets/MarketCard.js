import React, { useState } from "react";
import Market from "../markets/Market.js";
import { CreditCardIcon } from '@heroicons/react/24/outline'

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
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="font-semibold">{props.market.name}</p>
          <p className="text-gray-600">{props.market.street_address}</p>
          <p className="text-gray-600">{props.market.borough}</p>
          <button
            className="btn"
            onClick={handleDisplay}
          >
            MORE...
          </button>

          {props.market.ebt_accepted?.toLowerCase() === "yes" && (
            <CreditCardIcon
              style={{ width: '28px', height: '28px' }}
              className="text-gray-700 float-right"
            />
          )}
        </div>
      )}
    </div>
  );
};

export default MarketCard;
