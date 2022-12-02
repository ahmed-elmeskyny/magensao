//react
import ScrollContainer from "react-indiana-drag-scroll";
import { useState, useEffect } from "react";
//styles
import styles from "./categorie.module.scss";

//icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Thumbnail from "../thumbnail/thumbnail";

const Categorie = ({ prof, alumini }) => {
  return (
    <div className={styles.categorieContainer}>
      <div className={styles.categorie}>
        <h1>PROFESSEUR DE L&apos;ÉDITION</h1>
        <div
          className={styles.img}
          style={{ backgroundImage: `url(${prof.img})` }}
        ></div>
        {/* <img src={prof.img}></img> */}
        <h2>{prof.title}</h2>
        <p>{prof.slug}...</p>
        <div className={styles.Links}>
          <a
            className={styles.link2}
            href={`/article/${prof.id}?edition=${prof.edition}`}
          >
            LIRE LE QUESTIONNAIRE{" "}
          </a>
        </div>
      </div>{" "}
      <div className={styles.categorie}>
        <h1>ALUMINI DE L&apos;ÉDITION</h1>
        {/* <img src={alumini.img}></img> */}
        <div
          className={styles.img}
          style={{
            backgroundImage: `url(${alumini.img})`,
            backgroundPosition: "center",
          }}
        ></div>
        <h2>{alumini.title}</h2>
        <p>{alumini.slug}...</p>
        <div className={styles.Links}>
          <a
            className={styles.link2}
            href={`/article/${alumini.id}?edition=${alumini.edition}`}
          >
            LIRE LE QUESTIONNAIRE{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Categorie;
