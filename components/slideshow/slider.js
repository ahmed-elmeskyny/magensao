import React from "react";
import { Slide } from "react-slideshow-image";
import { useState, useEffect } from "react";

//styles
import "react-slideshow-image/dist/styles.css";
import styles from "./slider.module.scss";

import { getFormattedDate } from "../../config/fire-config";

import { magdb } from "../../db/mag";

const properties = {
  indicators: true,
  arrows: false,
  duration: 200000,
};

const Slider = ({ articles }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 800;

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, []);

  return (
    <div>
      <Slide
        easing="ease"
        {...properties}
        className={styles.slides}
        style={width < breakpoint ? { width: width } : { width: "100%" }}
      >
        <div className={styles.eachSlide}>
          <div className={styles.slide}>
            <div
              className={styles.image}
              style={
                width < breakpoint ? { width: width - 38 } : { width: "290px" }
              }
            >
              <img src={magdb[0].thumbnail} width="280px"></img>
            </div>
            <div className={styles.description}>
              <span className={styles.date}>{magdb[0].date}</span>
              <h1 className={styles.title}>
                {magdb[0].title} DU {magdb[0].date}
              </h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using 'Content
                here, content here', making it look like readable English. Many
                desktop publishing packages and web page editors now use Lorem
                Ipsum as their default model text, and a search for 'lorem
                ipsum' will uncover many web sites still in their infancy...
              </p>
              <div className={styles.magazineLinks}>
                <a className={styles.link1} href={magdb[0].read}>
                  LIRE CETTE ÉDITION{" "}
                </a>
                <a className={styles.link2} href="/archives">
                  VOIR TOUS LES NUMÉROS
                </a>
              </div>
            </div>
          </div>
        </div>
        {articles.map((article) => (
          <div className={styles.eachSlide} key={article.id}>
            <div className={styles.slide}>
              <div
                className={styles.image}
                style={
                  width < breakpoint ? { width: width - 20 } : { width: "100%" }
                }
                // style={{ backgroundImage: `url(${article.img})` }}
              >
                <img src={article.img} height="100%"></img>
              </div>

              <div className={styles.description}>
                <span className={styles.date}>
                  {" "}
                  {getFormattedDate(article.createdAt)}
                </span>
                <h1 className={styles.title}>{article.title}</h1>
                <p>{article.slug}</p>
                <div className={styles.magazineLinks}>
                  <a className={styles.link1} href={`/article/${article.id}`}>
                    LIRE L'ARTICLE{" "}
                  </a>
                  <a className={styles.link2} href={`/${article.categorie}`}>
                    TOUS LES ARTICLES LIÉS
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Slider;
