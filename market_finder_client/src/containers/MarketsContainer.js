import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Markets from "../components/markets/Markets.js";
import MarketCard from "../components/markets/Market.js";

const MarketsContainer = (props) => {
  const [markets, setMarkets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:3000/markets")
      .then((response) => response.json())
      .then((markets) => {
        setMarkets(markets);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Routes>
      <Route
        path=":market_id"
        element={<MarketCard market={props.market} userMarkets={props.userMarkets}/>}
      />
      <Route
        path="/"
        element={<Markets markets={markets} userMarkets={props.userMarkets} />}
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default MarketsContainer;
