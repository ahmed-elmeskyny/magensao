import react from "react";
import parse from "html-react-parser";

//styles
import styles from "./article.module.scss";

//utils
import { getFormattedDate } from "../../config/fire-config";

const Article = ({ title, author, article, createdAt, img, domaine }) => {
  return (
    <div className={styles.articleContainer}>
      <h1 className={styles.title}> {title}</h1>
      <p className={styles.writer}>
        Publié le {getFormattedDate(createdAt)} , {author} , {domaine}
      </p>
      <img src={img}></img>
      <div className={styles.article}>{parse(`${article}`)}</div>
    </div>
  );
};

export default Article;
