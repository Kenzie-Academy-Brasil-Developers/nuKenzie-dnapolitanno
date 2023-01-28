import React from "react";
import Logoimglight from "../Imglogolight";
import "./index.css";

const Header = ({ setIsLoggedIn }) => {
  return (
    <>
      <header>
        <section className="headercontainer container">
          <Logoimglight />
          <nav>
            <ul>
              <li>
                <button
                  className="backhomebtn"
                  onClick={() => setIsLoggedIn(true)}
                >
                  Inicio
                </button>
              </li>
            </ul>
          </nav>
        </section>
      </header>
    </>
  );
};

export default Header;
