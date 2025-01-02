import React, { useState, useMemo } from "react";
import MarketCard from "../markets/MarketCard.js";

const Markets = (props) => {
  const [borough, setBorough] = useState("default");

  const filteredMarkets = useMemo(() => {
    if (borough === "default") {
      return props.markets;
    } else {
      return props.markets.filter((market) => market.borough === borough);
    }
  }, [borough, props.markets]);

  const handleOnChange = (e) => {
    const borough = e.target.value;
    setBorough(borough);
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
          <option value="default">
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
