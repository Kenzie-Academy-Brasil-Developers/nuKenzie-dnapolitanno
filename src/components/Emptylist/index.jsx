import React from "react";
import imgnocards from "../../assets/Nocards.svg";
import "./index.css";

const Emptylist = () => {
  return (
    <div className="empty-box">
      <h3>Você ainda não possui nenhum lançamento</h3>
      <img src={imgnocards} />
    </div>
  );
};

export default Emptylist;
