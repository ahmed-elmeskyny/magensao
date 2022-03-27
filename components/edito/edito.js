import React from "react";
import { Slide } from "react-slideshow-image";
import { useState, useEffect } from "react";

//styles
import "react-slideshow-image/dist/styles.css";
import styles from "./edito.module.scss";

import { getFormattedDate } from "../../config/fire-config";

import { magdb } from "../../db/mag";

const properties = {
  indicators: true,
  arrows: false,
  duration: 200000,
};

const Edito = ({ article }) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>EDITORIAL : </span>
      <div className={styles.editoContainer}>
        <div
          className={styles.imgContainer}
          style={{ backgroundImage: `url(${article.img})` }}
        >
          {/* <img src={article.img}></img> */}
        </div>
        <div className={styles.edito}>
          <span>{article.author}</span>
          <h1>{article.title}</h1>
          <p>{article.slug} ....</p>
          <div className={styles.Links}>
            <a className={styles.link2} href={`/article/${article.id}`}>
              LIRE EDITORIAL{" "}
            </a>
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
