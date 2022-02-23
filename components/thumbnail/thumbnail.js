//styles
import styles from "./thumbnail.module.scss";

const Thumbnail = ({ img, categorie, date, titre }) => {
  return (
    <a className={styles.container} href="/article/1">
      <img src={`${img}`}></img>
      <div>
        <p className={styles.date}>
          {date} - <span>{categorie}</span>
        </p>
        <h2 className={styles.titre}>{titre}</h2>
      </div>
    </a>
  );
};

export default Thumbnail;
