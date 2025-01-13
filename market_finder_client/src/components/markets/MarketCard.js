import React, { useEffect, useState } from "react";
import Market from "../markets/Market.js";
import { CreditCardIcon, XMarkIcon } from '@heroicons/react/24/outline'

const MarketCard = (props) => {
  let [displayMarket, setDisplayMarket] = useState(false);
  let [displayAdd, setDisplayAdd] = useState(true);

  useEffect(() => {
    const marketExists = props.userMarkets.some((userMarket) => userMarket.id === props.market.id);
    setDisplayAdd(!marketExists);
  }, [props.userMarkets, props.market.id]);

  const handleDisplay = (value) => {
    setDisplayMarket(value);
  };

  return (
    <div>
      {displayMarket ? (
        <div>
          <button onClick={() => handleDisplay(false)}>
            <XMarkIcon style={{ width: '28px', height: '28px' }} className="text-gray-700 float-right" />
          </button>

          <Market market={props.market} userMarkets={props.userMarkets} handleDisplay={handleDisplay} setDisplayAdd={setDisplayAdd} displayAdd={displayAdd} />
        </div>
      ) : (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="font-semibold">{props.market.name}</p>
          <p className="text-gray-600">{props.market.street_address}</p>
          <p className="text-gray-600">{props.market.borough}</p>
          <button
            className="btn"
            onClick={() => handleDisplay(true)}
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
