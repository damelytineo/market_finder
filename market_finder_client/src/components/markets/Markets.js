import React, { useState } from "react";
import MarketCard from "../markets/MarketCard.js";

const Markets = (props) => {
  let [filteredMarkets, setFilteredMarkets] = useState(props.markets);

  const filterByBorough = (borough) => {
    setFilteredMarkets(
      props.markets.filter((market) => market.borough === borough),
    );
  };

  const handleOnChange = (e) => {
    let borough = e.target.value;
    if (borough !== "default") {
      filterByBorough(borough);
    }
  };

  return (
    <div className="space-y-4">
      <div className="p-4">
        <select
          id="borough"
          onChange={handleOnChange}
          defaultValue={"default"}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
          <option value="default" disabled>
            Filter by Borough
          </option>
          <option value="Brooklyn">Brooklyn</option>
          <option value="Queens">Queens</option>
          <option value="Manhattan">Manhattan</option>
          <option value="Bronx">Bronx</option>
          <option value="Staten Island">Staten Island</option>
        </select>
      </div>

      {filteredMarkets.map((market) => (
        <div key={market.id} className="market-card">
          <MarketCard market={market} userMarkets={props.userMarkets} />
        </div>
      ))}
    </div>
  );
};

export default Markets;
