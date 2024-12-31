import React, { useState } from "react";

const LogIn = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmit= (e) => {
    e.preventDefault();
    if (!username || !password) {
      setError("Both username and password are required.");
      return;
    }
    let configObj = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ username, password }),
    };
    fetch("http://localhost:3000/login", configObj)
      .then((response) => response.json())
      .then((userData) => {
        props.handleLogin(userData);
      })
      .catch((error) => {
        setError("Invalid username or password.");
      });
  };

  return (
    <div>
      <form className="space-y-4" onSubmit={onSubmit}>
      {error && <div className="border px-4 py-3 rounded relative" role="alert">{error}</div>}
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
            type="submit"
            className="btn"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default LogIn;
