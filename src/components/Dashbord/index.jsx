import React from "react";
import Header from "../Header";
import Form from "../Form";
import TotalMoney from "../Money";
import Emptylist from "../Emptylist";
import Card from "../Card";
import "./index.css";

const Dashbord = ({ setIsLoggedIn, listTransactions, setListTransactions }) => {
  localStorage.setItem("data", JSON.stringify(listTransactions));

  return (
    <>
      <Header setIsLoggedIn={setIsLoggedIn} />
      <main className="maincontainerdash container">
        <section className="formcontainer">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
          />
          {listTransactions.length > 0 ? (
            <TotalMoney listTransactions={listTransactions} />
          ) : (
            false
          )}
        </section>
        <section className="navdashlist container">
          <h4>Resumo financeiro</h4>
          {!listTransactions.length ? (
            <Emptylist />
          ) : (
            <Card
              listTransactions={listTransactions}
              setListTransactions={setListTransactions}
            />
          )}
        </section>
      </main>
    </>
  );
};

export default Dashbord;
