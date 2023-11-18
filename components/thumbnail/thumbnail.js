//styles
import styles from "./thumbnail.module.scss";

//utils
import { getFormattedDate } from "../../config/fire-config";
import { urlObjectKeys } from "next/dist/shared/lib/utils";
import Link from "next/link";

const Thumbnail = ({ img, edition, title, id, author }) => {
  return (
    <Link className={styles.container} href={`/article/${id}?edition=${edition}`}>
      <div
        className={styles.img}
        style={
          img
            ? { backgroundImage: `url(${img})` }
            : { backgroundImage: "url(/blog.png) " }
        }
      ></div>
      {/* <img src={img ? img : "/blog.png"}></img> */}
      <div>
        <p className={styles.date}>
          {/* {getFormattedDate(createdAt)} - <span>{categorie}</span> */}
          <span>{author}</span>
        </p>
        <h2 className={styles.titre}>{title}</h2>
      </div>
    </Link>
  );
};

export default Thumbnail;
