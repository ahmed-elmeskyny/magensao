//react
import React, { useState } from "react";
import { useForm } from "react-hook-form";

//styles
import styles from "./popup.module.scss";

//icons
import { GrFormClose } from "react-icons/gr";

import { fire } from "../../config/fire-config";
import { collection, addDoc } from "firebase/firestore";

const Popup = ({ toggle, setToggle }) => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    reset("");
    setToggle(!toggle);
    const docRef = addDoc(collection(fire, "subscribes"), {
      ...data,
    });
  };
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
              &quot;MagEnsao&quot;
            </h2>
            <p>
              recevoir les derniers articles et editions directement dans votre
              boîte de réception
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="email"
                placeholder="Votre E-mail"
                {...register("email")}
              ></input>
              <button type="submit">inscrivez-vous</button>
            </form>
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
