//styles
import styles from "./abonner.module.scss";

const Abonner = () => {
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
        <input type="email" placeholder="Votre E-mail"></input>
        <button type="submit">inscrivez-vous</button>
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
