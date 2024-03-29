import React from "react";
import { Slide } from "react-slideshow-image";
import { useState, useEffect } from "react";

//styles
import "react-slideshow-image/dist/styles.css";
import styles from "./edito.module.scss";
import Link from "next/link";

const Edito = ({ article }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>EDITORIAL </span>
      <div className={styles.editoContainer}>
        <div
          className={styles.imgContainer}
          style={{
            backgroundImage: `url(${article.img})`,
          }}
        >
          {/* <img src={article.img}></img> */}
        </div>
        <div className={styles.edito}>
          <h1>
            {article.author}, {article.domaine}
          </h1>
          {/* <h1>{article.title}</h1> */}
          <p>{article.slug} ....</p>
          <div className={styles.Links}>
            <Link
              className={styles.link2}
              href={`/article/${article.id}?edition=${article.edition}`}
            >
              LIRE EDITORIAL{" "}
            </Link>
            {/* <a className={styles.link2} href="/archives">
              VOIR TOUS LES NUMÉROS
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Edito;
