import React, { useState } from "react";
import Home from "./components/Home";
import Dashbord from "./components/Dashbord";
import "./App.css";

function App() {
  if (!localStorage.data) localStorage.setItem("data", "[]");

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [listTransactions, setListTransactions] = useState(
    JSON.parse(localStorage.data) || []
  );

  return (
    <>
      {isLoggedIn ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Dashbord
          setIsLoggedIn={setIsLoggedIn}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </>
  );
}

export default App;
