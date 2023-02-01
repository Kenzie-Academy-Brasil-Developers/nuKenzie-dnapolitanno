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
    <section>
      {isLoggedIn ? (
        <Home setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Dashbord
          className="backgroundash"
          setIsLoggedIn={setIsLoggedIn}
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </section>
  );
}

export default App;
