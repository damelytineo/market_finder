import React, { useEffect, useState } from "react";
import UserMarkets from "../components/markets/UserMarkets.js";
import Markets from "../components/markets/Markets.js";
import { Routes, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setPage, setTotalPageCount } from "../userMarketsPaginationSlice.js";

const Home = (props) => {
  const dispatch = useDispatch();
  let [uMarkets, setMarkets] = useState([]);
  const { page } = useSelector((state) => state.userMarketsPagination);


  useEffect(() => {
    fetch(`http://localhost:3000/users/${props.currentUser.id}/markets?page=${page}`, {
      credentials: "include",
    })
      .then((response) => response.json())
      .then((data) => {
        setMarkets(data.markets);
        dispatch(setTotalPageCount({ total_page_count: data.meta.total_page_count }));
      })
      .catch((error) => {
        console.error("Error:", error); 
      });
  }, [dispatch, props.currentUser.id, page]);

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

  const handlePageChange = (page) => {
    dispatch(setPage(page));
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

      <Routes>
        <Route
          path="/"
          element={<UserMarkets userMarkets={uMarkets} handlePageChange={handlePageChange} page={page} />}
        />
        <Route
          path="/markets"
          element={<Markets userMarkets={uMarkets} handlePageChange={handlePageChange} page={page} />}
        />
      </Routes>
    </div>
  );
};

export default Home;
