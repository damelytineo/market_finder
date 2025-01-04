import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Markets from "../components/markets/Markets.js";
import MarketCard from "../components/markets/Market.js";

const MarketsContainer = (props) => {
  const [markets, setMarkets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/markets")
      .then((response) => {
        if (!response.ok) {
          return response.json().then((data) => {
            throw new Error(data.message);
          });
        }
        return response.json();
      })
      .then((data) => {
        setMarkets(data.markets || []);
      })
      .catch((error) => {
        console.error("Error fetching markets:", error);
      });
  }, []);

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
