import react from "react";
import parse from "html-react-parser";

//styles
import styles from "./article.module.scss";

//utils
import { getFormattedDate } from "../../config/fire-config";

const Article = ({ title, author, categorie, article, createdAt, img }) => {
  return (
    <div className={styles.articleContainer}>
      <h1 className={styles.title}> {title}</h1>
      <p className={styles.writer}>
        Publié le {getFormattedDate(createdAt)} , {author}
      </p>
      {/* <img src={img}></img> */}
      <p className={styles.article}>{parse(`${article}`)}</p>
    </div>
  );
};

export default Article;
