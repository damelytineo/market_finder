import React, { useState, useEffect } from "react";
import LogIn from "./components/LogIn.js";
import Home from "./components/Home.js";

const App = () => {
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
          setCurrentUser(data.user.id);
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        { currentUser ? (
          <Home currentUser={currentUser} setCurrentUser={setCurrentUser} />
        ) : (
          <LogIn handleLogin={handleLogin} />
        )}
      </div>
    </div>
  );
};

export default App;
