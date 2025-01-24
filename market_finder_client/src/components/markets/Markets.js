import React, { useEffect, useState } from "react";
import MarketCard from "../markets/MarketCard.js";
import { useDispatch, useSelector } from "react-redux";
import { setPage, setTotalPageCount } from "../../marketsPaginationSlice.js";
import { gql, useQuery } from '@apollo/client';

const Markets = (props) => {
  const dispatch = useDispatch();
  const [borough, setBorough] = useState("default");
  const { page, paginationMeta } = useSelector((state) => state.marketsPagination);
  const [markets, setMarkets] = useState([]);
  const [open, setOpenNow] = useState(false);


  const handleOnChange = (e) => {
    const borough = e.target.value;
    setBorough(borough);
  };

  const handlePageChange = (page) => {
    dispatch(setPage(page));
  };

  const processOpenNow = () => {
    // toggle open state
    setOpenNow((prevOpen) => !prevOpen);
  };

  const GET_MARKETS = gql`
    query GetMarkets($borough: String, $page: Int!, $open: Boolean) {
      markets(borough: $borough, page: $page, open: $open) {
        id
        name
        borough
        street_address
        open_time
        close_time
      }
    }
  `;

  const { error, data } = useQuery(GET_MARKETS, {
    variables: { borough, page, open },
  });

  useEffect(() => {
    if (data) {
      setMarkets(data.markets || []);
      dispatch(setTotalPageCount({ total_page_count: data.meta.total_page_count }));
    }
  }, [data, dispatch]);

  if (error) {
    console.error("Error fetching markets:", error);
    throw new Error(error.message || "An unknown error occurred.");
  }

  return (
    <div className="space-y-4">
      {markets.length ? (
        <div>
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

          <div>
            <button
              className="btn"
              onClick={() => processOpenNow()}
            >
              Open Now
            </button>
          </div>
      
          {markets.map((market) => (
            <div key={market.id} className="market-card">
              <MarketCard market={market} userMarkets={props.userMarkets} />
            </div>
          ))}

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
              disabled={page === paginationMeta.totalPageCount}
            >
              Next
            </button>
          </div>

          <span> Page {page} of {paginationMeta.totalPageCount}</span>
        </div>
      ) : (
        <div>
           <p className="text-center text-gray-600 mt-8">
              No markets found. Check out the <a href="/markets" class="text-blue-500 underline hover:text-blue-700">Markets</a> tab for more options!
            </p>
        </div>
      )}
    </div>
  );
};

export default Markets;
