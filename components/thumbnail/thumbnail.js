//styles
import styles from "./thumbnail.module.scss";

//utils
import { getFormattedDate } from "../../config/fire-config";

const Thumbnail = ({ img, categorie, createdAt, title, id, margin }) => {
  return (
    <a
      className={styles.container}
      href={`/article/${id}`}
      style={
        margin
          ? { marginRight: "0" }
          : { marginRight: "10px", marginLeft: "10px" }
      }
    >
      <img src={img ? img : "/blog.png"}></img>
      <div>
        <p className={styles.date}>
          {getFormattedDate(createdAt)} - <span>{categorie}</span>
        </p>
        <h2 className={styles.titre}>{title}</h2>
      </div>
    </a>
  );
};

export default Thumbnail;
