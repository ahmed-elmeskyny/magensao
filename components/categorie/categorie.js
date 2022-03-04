//react
import ScrollContainer from "react-indiana-drag-scroll";

//styles
import styles from "./categorie.module.scss";

//icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Thumbnail from "../thumbnail/thumbnail";

const Categorie = ({ categorie, articles }) => {
  articles.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
  return (
    <div className={styles.categorieContainer}>
      <div className={styles.categorie}>
        <h2>{categorie}</h2>
        <a>
          Voir les articles liés{" "}
          <BsFillArrowRightCircleFill
            style={{ marginLeft: "10px" }}
          ></BsFillArrowRightCircleFill>
        </a>
      </div>{" "}
      <ScrollContainer
        className={styles.blogs}
        vertical="flase"
        horizontal="True"
        nativeMobileScroll="True"
      >
        {articles.map(
          (article, idx) =>
            idx < 7 && (
              <Thumbnail
                img="/blog.png"
                key={article.id}
                {...article}
              ></Thumbnail>
            )
        )}
      </ScrollContainer>
    </div>
  );
};

export default Categorie;
