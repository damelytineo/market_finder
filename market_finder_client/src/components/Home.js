import React, { useEffect, useState } from "react";
import UserMarkets from "../components/markets/UserMarkets.js";
import MarketsContainer from "../containers/MarketsContainer.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const Home = (props) => {
  let [uMarkets, setMarkets] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users/${props.currentUser}/markets`)
      .then((response) => response.json())
      .then((markets) => {
        setMarkets(markets);
      });
  }, [props.currentUser]);

  const logout = () => {
    let configObj = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
    };
    fetch(`http://localhost:3000/logout`, configObj)
      .then((res) => res.json())
      .then(() => {
        props.setCurrentUser("");
      })
  };

  return (
    <div>
      <nav className="px-4 py-3 bg-gray-100 flex items-center justify-between shadow-sm">
        <div className="flex space-x-6">
          <a href="/" className="text-blue-500 hover:text-blue-700 transition">
            HOME
          </a>
          <a href="/markets" className="text-blue-500 hover:text-blue-700 transition">
            MARKETS
          </a>
          <a
            href="/login"
            className="text-blue-500 hover:text-blue-700 transition"
            onClick={(e) => {
              e.preventDefault();
              logout();
            }}
          >
            LOGOUT
          </a>
        </div>
      </nav>

      <Router>
        {uMarkets.length > 0 ? (
          <Routes>
            <Route
              path="/"
              element={<UserMarkets userMarkets={uMarkets} />}
            />
            <Route
              path="/markets"
              element={<MarketsContainer userMarkets={uMarkets} />}
            />
          </Routes>
        ) : (
          <div>Loading</div>
        )}
      </Router>
    </div>
  );
};

export default Home;
