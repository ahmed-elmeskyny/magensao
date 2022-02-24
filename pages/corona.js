import Head from "next/head";
import {} from "react"

import styles from "../styles/categories.module.scss";

//components
import Layout from "../components/Layout/layout";
import Share from "../components/share/share";
import Thumbnail from "../components/thumbnail/thumbnail";

//db
import { magdb } from "../db/mag";

export default function Archives() {
  return (
    <div>
      <Head>
        <title>MagEnsao || Corona</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div style={{ display: "flex" }}>
          <div className={styles.pageContainer}>
            <div className={styles.title}>
              <h1>Coronavirus</h1>
              <input
                type="text"
                placeholder="Recherher par titre d'article"
              ></input>
            </div>
            <div className={styles.articles}>
              <Thumbnail
                img="/corona.jpg"
                categorie="Coronavirus"
                titre="Variant Omicron BA.2: les chercheurs percent ses premiers secrets"
                date="Janv 01, 2022"
              ></Thumbnail>

              <Thumbnail
                img="/frt.jpg"
                categorie="Coronavirus"
                titre="Les frontières maritimes fermées jusqu’à nouvel ordre pour les
              passagers"
                date="Janv 15, 2022"
              ></Thumbnail>
              <Thumbnail
                img="/frt.jpg"
                categorie="Coronavirus"
                titre="Les frontières maritimes fermées jusqu’à nouvel ordre pour les
              passagers"
                date="Janv 15, 2022"
              ></Thumbnail>
              <Thumbnail
                img="/frt.jpg"
                categorie="Coronavirus"
                titre="Les frontières maritimes fermées jusqu’à nouvel ordre pour les
              passagers"
                date="Janv 15, 2022"
              ></Thumbnail>
              <Thumbnail
                img="/frt.jpg"
                categorie="Coronavirus"
                titre="Les frontières maritimes fermées jusqu’à nouvel ordre pour les
              passagers"
                date="Janv 15, 2022"
              ></Thumbnail>
              <Thumbnail
                img="/frt.jpg"
                categorie="Coronavirus"
                titre="Les frontières maritimes fermées jusqu’à nouvel ordre pour les
              passagers"
                date="Janv 15, 2022"
              ></Thumbnail>
              <Thumbnail
                img="/corona.jpg"
                categorie="Coronavirus"
                titre="Variant Omicron BA.2: les chercheurs percent ses premiers secrets"
                date="Janv 01, 2022"
              ></Thumbnail>
              <Thumbnail
                img="/corona.jpg"
                categorie="Coronavirus"
                titre="Variant Omicron BA.2: les chercheurs percent ses premiers secrets"
                date="Janv 01, 2022"
              ></Thumbnail>
              <Thumbnail
                img="/corona.jpg"
                categorie="Coronavirus"
                titre="Variant Omicron BA.2: les chercheurs percent ses premiers secrets"
                date="Janv 01, 2022"
              ></Thumbnail>
              <Thumbnail
                img="/corona.jpg"
                categorie="Coronavirus"
                titre="Variant Omicron BA.2: les chercheurs percent ses premiers secrets"
                date="Janv 01, 2022"
              ></Thumbnail>
            </div>
          </div>
          <Share></Share>
        </div>
      </Layout>
    </div>
  );
}