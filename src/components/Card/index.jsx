import React from "react";
import Imglightbuttontrash from "../../assets/lightrash.svg";
import "./index.css";

const Card = ({ setListTransactions, listTransactions }) => {
  const removeCard = (e) => {
    const cardid = listTransactions.filter((card) => card.id === e.id);
    const newData = [...listTransactions];
    newData.splice(cardid, 1);
    setListTransactions(newData);
  };

  return (
    <>
      <ul className="listcard">
        {listTransactions.map(
          ({ description, inputinformation, cashnumber, id }) => {
            return (
              <li
                className={
                  inputinformation === "Entrada" ? "cardentry" : "card"
                }
              >
                <h4 className="infotitle">{description}</h4>
                <span className="infotypeinformation">{inputinformation}</span>
                <span className="infomoney">
                  {cashnumber.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </span>
                <button className="buttontrashcard">
                  <img
                    className="imgtrashcard"
                    src={Imglightbuttontrash}
                    onClick={removeCard}
                    alt="trash"
                    id={id}
                  />
                </button>
              </li>
            );
          }
        )}
      </ul>
    </>
  );
};

export default Card;
