import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./index.css";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState("");
  const [cash, setCash] = useState("");
  const [inputinformation, setInputinformation] = useState("Entrada");

  function handleSubmit(event) {
    event.preventDefault();

    let cashnumber = 0;

    {
      inputinformation === "Despesa"
        ? (cashnumber = parseFloat(-cash))
        : (cashnumber = parseFloat(cash));
    }

    const newList = {
      id: uuid(),
      description,
      cashnumber,
      inputinformation,
    };

    {
      newList.description === "" ||
      !newList.cashnumber ||
      newList.inputinformation === ""
        ? false
        : setListTransactions((oldsetlistTrasition) => [
            ...oldsetlistTrasition,
            newList,
          ]);
    }

    event.target.reset();
    setDescription("");
    setCash("");
    setInputinformation("Entrada");
  }

  return (
    <>
      <section className="mainform">
        <form className="containerform" onSubmit={handleSubmit}>
          <label>
            Descrição
            <input
              className="inputformdescripition"
              type="text"
              placeholder="Digite aqui sua descrição"
              onChange={(event) => setDescription(event.target.value)}
            />
            <span className="obsinputdesc">Ex: Compra de roupas</span>
          </label>
          <section className="containerinfo">
            <label>
              Valor
              <input
                className="inputformvalue"
                type="number"
                placeholder="Valor"
                onChange={(event) => setCash(event.target.value)}
              />
            </label>
            <label>
              Tipo de valor
              <select
                className="selectform"
                onChange={(event) => setInputinformation(event.target.value)}
              >
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
              </select>
            </label>
          </section>

          <button type="submit" className="submitbutton">
            Inserir valor
          </button>
        </form>
      </section>
    </>
  );
};

export default Form;
