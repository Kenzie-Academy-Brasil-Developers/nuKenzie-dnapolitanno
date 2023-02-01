import React from "react";
import Imglightbuttontrash from "../../assets/lightrash.svg";
import "./index.css";

const Card = ({ setListTransactions, listTransactions }) => {
  const removeCard = (e) => {
    console.log(e.target.id);
    const cardid = listTransactions.filter((card) => card.id !== e.target.id);
    console.log(cardid);

    setListTransactions(cardid);
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
                <section className="containerdescriptioncard">
                  <h4 className="infotitle">{description}</h4>
                  <span className="infotypeinformation">
                    {inputinformation}
                  </span>
                </section>
                <span className="infomoney">
                  {Math.abs(cashnumber).toLocaleString("pt-br", {
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
