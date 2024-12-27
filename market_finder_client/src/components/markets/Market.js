import React, { useEffect, useState } from "react";
import Map from "../Map";

const Market = (props) => {
  let [displayAdd, setDisplayAdd] = useState(true);

  //useEffect is called after each render and when setState is used inside of it, it will cause the component to re-render which will call useEffect and so on...
  //passing an empty array as a second argument is away around this. The effect function should be called once after the first render only.
  useEffect(() => {
    for (let i = 0; i < props.userMarkets.length; i++) {
      if (props.userMarkets[i].id === props.market.id) {
        setDisplayAdd(false);
      }
    }
    return () =>
      console.log(
        "This return function will run when the component is unmounted",
      );
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
      <h5 className="text-sm text-gray-600">{props.market.latitude}</h5>
      <h5 className="text-sm text-gray-600">{props.market.longitude}</h5>

      <Map
        latitude={props.market.latitude}
        longitude={props.market.longitude}
      />

      {displayAdd && (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm cursor-pointer"
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
