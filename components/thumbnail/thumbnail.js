//styles
import styles from "./thumbnail.module.scss";

//utils
import { getFormattedDate } from "../../config/fire-config";

const Thumbnail = ({ img, categorie, createdAt, title, id, author }) => {
  return (
    <a className={styles.container} href={`/article/${id}`}>
      <img src={img ? img : "/blog.png"}></img>
      <div>
        <p className={styles.date}>
          {/* {getFormattedDate(createdAt)} - <span>{categorie}</span> */}
          <span>{author}</span>
        </p>
        <h2 className={styles.titre}>{title}</h2>
      </div>
    </a>
  );
};

export default Thumbnail;
