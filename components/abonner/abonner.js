//react
import React from "react";
import { useForm } from "react-hook-form";

//styles
import styles from "./abonner.module.scss";

//firebase
import { fire } from "../../config/fire-config";
import { collection, addDoc } from "firebase/firestore";

const Abonner = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const docRef = addDoc(collection(fire, "subscribes"), {
      ...data,
    });
  };

  return (
    <div className={styles.abonnContainer}>
      <div className={styles.abonn}>
        <h2>
          Abonnez-vous maintenant pour obtenir les dernières éditions de
          MagEnsao et plus encore!
        </h2>
        <p>
          recevoir les derniers articles directement dans votre boîte de
          réception
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
  );
};

export default Abonner;
