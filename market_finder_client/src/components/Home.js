import React, { useEffect, useState } from "react";
import UserMarkets from "../components/markets/UserMarkets";
import MarketsContainer from "../containers/MarketsContainer";
import { BrowserRouter as Switch, Route } from "react-router-dom";
import { withRouter } from "react-router";

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
    fetch(`http://localhost:3000/logout`, configObj);
  };

  return (
    <div>
      <nav className="px-4 py-3 flex items-center justify-between">
        <div className="flex space-x-6">
          <a href="/" className="hover:text-gray-400 transition">
            HOME
          </a>
          <a href="/markets" className="hover:text-gray-400 transition">
            MARKETS
          </a>
          <a
            href="/login"
            className="hover:text-gray-400 transition"
            onClick={() => logout()}
          >
            LOGOUT
          </a>
        </div>
      </nav>

      {uMarkets.length > 0 ? (
        <Switch>
          <Route
            exact
            path="/"
            component={() => <UserMarkets userMarkets={uMarkets} />}
          />
          <Route
            path="/markets"
            component={() => <MarketsContainer userMarkets={uMarkets} />}
          />
        </Switch>
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
};

export default withRouter(Home);
