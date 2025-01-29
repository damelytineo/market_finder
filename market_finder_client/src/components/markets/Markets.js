import React, { useEffect, useState, useMemo } from "react";
import MarketCard from "../markets/MarketCard.js";
import { gql, useQuery } from "@apollo/client";

const Markets = (props) => {
  const [borough, setBorough] = useState("default");
  const [markets, setMarkets] = useState([]);
  const [open, setOpenNow] = useState(false);
  const [pageInfo, setPageInfo] = useState({ });


  const handleOnChange = (e) => {
    const borough = e.target.value;
    setBorough(borough);
  };


  const processOpenNow = () => {
    // toggle open state
    setOpenNow((prevOpen) => !prevOpen);
  };

  const GET_MARKETS = gql`
    query GetMarkets($borough: String, $open: Boolean, $first: Int, $after: String) {
      markets(borough: $borough, open: $open, first: $first, after: $after) {
        edges {
          cursor
          node {
            id
            name
            borough
            streetAddress
            latitude
            longitude
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          endCursor
        }
      }
    }
  `;
  const variables = useMemo(() => ({
    borough: borough === "default" ? null : borough,
    open,
    first: 10,
    after: pageInfo?.endCursor || null,
  }), [borough, open]);

  const { data, fetchMore } = useQuery(GET_MARKETS, {
    variables,
    onCompleted: (data) => {
      if (data?.markets?.pageInfo) {
        setPageInfo(data.markets.pageInfo);
      }
    },
  });

  const loadMoreMarkets = () => {
    if (data?.markets?.pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          after: data.markets.pageInfo.endCursor,
        },
        updateQuery: (prev, { fetchMoreResult }) => {
          if (!fetchMoreResult) return prev;
          return {
            ...prev,
            markets: {
              ...prev.markets,
              edges: [...prev.markets.edges, ...fetchMoreResult.markets.edges],
              pageInfo: fetchMoreResult.markets.pageInfo,
            },
          };
        },
      });
    }
  };

  useEffect(() => {
    if (data) {
        setMarkets(data.markets.edges.map((edge) => edge.node));
        setPageInfo(data.markets.pageInfo);
    }
  }, [data]);

  // if (error) {
  //   console.error("Error fetching markets:", error);
  //   throw new Error(error.message || "An unknown error occurred.");
  // }

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
              disabled={!pageInfo.hasPreviousPage}
            >
              Previous
            </button>
            <button
              className="btn"
              onClick={loadMoreMarkets}
              disabled={!pageInfo.hasNextPage}
            >
              Next
            </button>
          </div>

          {/* <span> Page {pageInfo.currentPage} of {pageInfo.totalPages} </span> */}
        </div>
      ) : (
        <div>
           <p className="text-center text-gray-600 mt-8">
              No markets found. Check out the <a href="/markets" className="text-blue-500 underline hover:text-blue-700">Markets</a> tab for more options!
            </p>
        </div>
      )}
    </div>
  );
};

export default Markets;
