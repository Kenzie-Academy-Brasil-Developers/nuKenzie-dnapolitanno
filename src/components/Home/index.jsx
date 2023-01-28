import React from "react";
import Homeimgdesk from "../../assets/imghomedesk.svg";
import Homeimgmobile from "../../assets/imghomemobile.svg";
import Logoimgdark from "../Imglogodark";
import "./index.css";

const Home = ({ setIsLoggedIn }) => {
  return (
    <>
      <section className="pagehome">
        <main className="maincontainer container">
          <section className="infos">
            {<Logoimgdark />}
            <h2>Centralize o controle das suas finanças</h2>
            <span>de forma rápida e segura</span>
            <button className="initalbtn" onClick={() => setIsLoggedIn(false)}>
              Iniciar
            </button>
          </section>
          <section className="imghomedesk">
            <img src={Homeimgdesk} alt="logo" />
          </section>
          <section className="imghomemobile">
            <img src={Homeimgmobile} alt="logo" />
          </section>
        </main>
      </section>
    </>
  );
};

export default Home;
