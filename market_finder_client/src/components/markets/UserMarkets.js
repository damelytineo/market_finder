import React, { Component } from "react";
import MarketCard from "./MarketCard";

class UserMarkets extends Component {
  render() {
    return (
      <div className="space-y-4">
        <div className="text-lg font-semibold p-4">
          <p>Saved Markets:</p>
        </div>

        {this.props.userMarkets.map((market) => (
          <div
            key={market.id}
            className="market-card"
          >
            <MarketCard market={market} userMarkets={this.props.userMarkets} />
          </div>
        ))}
      </div>
    );
  }
}

export default UserMarkets;
