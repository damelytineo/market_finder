import React, { Component } from "react";
import MarketCard from "./MarketCard";

class UserMarkets extends Component {
  render() {
    return (
      <div className="space-y-4">
        <div className="text-lg font-semibold">
          <p>User's saved markets:</p>
        </div>

        {this.props.userMarkets.map((market) => (
          <div
            key={market.id}
            className="border border-gray-300 rounded-lg p-4 shadow-md"
          >
            <MarketCard market={market} userMarkets={this.props.userMarkets} />
          </div>
        ))}
      </div>
    );
  }
}

export default UserMarkets;
