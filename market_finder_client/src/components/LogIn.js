import React, { useState } from "react";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onClick = (e) => {
    e.preventDefault();
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include", //sends cross-origin cookie
      body: JSON.stringify({ username, password }),
    };
    fetch("http://localhost:3000/login", configObj)
      .then((response) => response.json())
      .then((userData) => {
        //lifting state up tp parent (App)
        //once user signs in we want to make a fetch request to logged_in to set current_user
        props.handleLogin(userData);
      });
  };

  return (
    <div>
      <form className="space-y-4">
        <div className="flex items-center space-x-4">
          <div className="w-1/4">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              name="username"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <div className="w-1/4">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              className="w-full px-3 py-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>
          <button
            type="button"
            onClick={(event) => onClick(event)}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
