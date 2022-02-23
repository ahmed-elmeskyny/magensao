//styles
import styles from "./thumbnail.module.scss";

const Thumbnail = ({ img, categorie, date, titre }) => {
  return (
    <div className={styles.container}>
      <img src={`${img}`}></img>
      <p className={styles.date}>
        {date} - <span>{categorie}</span>
      </p>
      <h2 className={styles.titre}>{titre}</h2>
    </div>
  );
};

export default Thumbnail;
