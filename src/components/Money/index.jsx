import React from "react";
import "./index.css";

const TotalMoney = ({ listTransactions }) => {
  return (
    <section className="totalmoneycontainer">
      <section className="containerinfomoney">
        <h5>Valor total:</h5>
        <p>O valor se refere ao saldo</p>
      </section>
      <span>
        $
        {listTransactions.reduce(
          (accumulator, accumulated) => accumulator + accumulated.cashnumber,
          0
        )}
      </span>
    </section>
  );
};

export default TotalMoney;
