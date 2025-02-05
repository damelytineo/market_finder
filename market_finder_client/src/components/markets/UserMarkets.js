import React from "react";
import MarketCard from "./MarketCard.js";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../userMarketsPaginationSlice.js";

const UserMarkets = (props) => {
  const dispatch = useDispatch();
  const { page, paginationMeta } = useSelector((state) => state.userMarketsPagination);

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  return (
    <div className="space-y-4">
      <div className="text-lg font-semibold p-4">
        <p>Saved Markets:</p>
      </div>

      {props.userMarkets && props.userMarkets.length > 0 ? (
        props.userMarkets.map((market) => (
          <div key={market.id} className="market-card">
            <MarketCard market={market} userMarkets={props.userMarkets} />
          </div>
        ))
      ) : (
        <div className="p-4 bg-white rounded-lg shadow-md">
          <p className="text-gray-600">No markets saved.</p>
        </div>
      )}

      <div className="flex justify-center space-x-4">
        <button
          className="btn"
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          className="btn"
          onClick={() => handlePageChange(page + 1)}
        >
          Next
        </button>
      </div>

      <span> Page {page} of {paginationMeta.totalPageCount}</span>
    </div>
  );
};

export default UserMarkets;
