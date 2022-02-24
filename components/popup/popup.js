//react
import React, { useState } from "react";

//styles
import styles from "./popup.module.scss";

//icons
import { GrFormClose } from "react-icons/gr";

const Popup = ({ toggle, setToggle }) => {
  return (
    <div
      className={styles.popupContainer}
      style={toggle ? { display: "" } : { display: "none" }}
    >
      <div className={styles.filter}>
        <div className={styles.abonnContainer}>
          <GrFormClose
            className={styles.close}
            onClick={() => setToggle(!toggle)}
          ></GrFormClose>
          <div className={styles.abonn}>
            <h2>
              Inscrivez-vous pour recevoir mensuellement notre magazine
              "MagEnsao"
            </h2>
            <p>
              recevoir les derniers articles et editions directement dans votre
              boîte de réception
            </p>
            <input type="email" placeholder="Votre E-mail"></input>
            <button type="submit">inscrivez-vous</button>
          </div>
          <div className={styles.edition}>
            <img src="/magensao7.png" className={styles.edition1}></img>
            <img src="/magensao6.jpg" className={styles.edition2}></img>
            <img src="/magensao5.png" className={styles.edition3}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
