import React from "react";
import MarketCard from "./MarketCard.js";

const UserMarkets = (props) => {
  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold p-4">
        <p>Saved Markets:</p>
      </div>

      {props.userMarkets && props.userMarkets.length > 0 ? (
        props.userMarkets.map((market) => (
          <div key={market.id} className="market-card">
            <MarketCard market={market} userMarkets={props.userMarkets} />
          </div>
        ))
      ) : (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">No markets saved.</p>
        </div>
      )}
    </div>
  );
};

export default UserMarkets;
