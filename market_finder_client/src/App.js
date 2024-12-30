import React, { useState, useEffect } from "react";
import LogIn from "./components/LogIn.js";
import Home from "./components/Home.js";

const App = () => {
  const [displayLogIn, setDisplayLogIn] = useState(true);
  const [currentUser, setCurrentUser] = useState("");

  useEffect(() => {
    handleLogin();
  }, []);

  const handleLogin = () => {
    fetch("http://localhost:3000/logged_in", {
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.logged_in) {
          setDisplayLogIn(false);
          setCurrentUser(data.user.id);
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {displayLogIn ? (
          <LogIn handleLogin={handleLogin} />
        ) : (
          <Home currentUser={currentUser} />
        )}
      </div>
    </div>
  );
};

export default App;
