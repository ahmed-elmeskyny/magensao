//styles
import styles from "./thumbnail.module.scss";

const Thumbnail = () => {
  return (
    <div className={styles.container}>
      <img src="/machine.jpg"></img>
      <p className={styles.date}>
        Nov 03 , 2021 - <span>Ingénierie</span>
      </p>
      <h2 className={styles.titre}>
        Machine Learning – Définition, fonctionnement et secteurs d’application
      </h2>
    </div>
  );
};

export default Thumbnail;
