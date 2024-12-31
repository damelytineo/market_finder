import React from "react";
import MarketCard from "./MarketCard.js";

const UserMarkets = (props) => {
  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold p-4">
        <p>Saved Markets:</p>
      </div>

      {props.userMarkets.map((market) => (
        <div key={market.id} className="market-card">
          <MarketCard market={market} userMarkets={props.userMarkets}/>
        </div>
      ))}
    </div>
  );
};

export default UserMarkets;
