import React, { useEffect, useState } from "react";
import Map from "../Map.js";

const Market = (props) => {
  let [displayAdd, setDisplayAdd] = useState(true);

  useEffect(() => {
    const marketExists = props.userMarkets.some((userMarket) => userMarket.id === props.market.id);
    setDisplayAdd(!marketExists);
  }, [props.userMarkets, props.market.id]);

  const handleAdd = (id) => {
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ market_id: id }),
    };
    fetch("http://localhost:3000/user_markets", configObj);
    setDisplayAdd(false);
  };

  return (
    <div>
      <h5 className="text-lg font-semibold">{props.market.name}</h5>

      <Map
        latitude={props.market.latitude}
        longitude={props.market.longitude}
      />

      {displayAdd && (
        <button
          className="btn"
          value={props.market.id}
          onClick={() => handleAdd(props.market.id)}
        >
          ADD
        </button>
      )}
    </div>
  );
};

export default Market;
