import Head from "next/head";

//styles
import styles from "../styles/Home.module.scss";
import { useState, useEffect } from "react";

//components
import Layout from "../components/Layout/layout";
import Edito from "../components/edito/edito";
import Thumbnail from "../components/thumbnail/thumbnail";
import Abonner from "../components/abonner/abonner";
import Categorie from "../components/categorie/categorie";
import Loader from "../components/loader/loader";

//firebase
import { fire, storage, getFormattedDate } from "../config/fire-config";
import { collection, onSnapshot } from "firebase/firestore";

export default function Home() {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    onSnapshot(collection(fire, "articles"), (snapshot) => {
      setarticles(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);
  console.log(articles);

  const sliderArticles = articles.filter(
    (article) => article.position == "slider"
  );
  sliderArticles.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const TopArticles = articles.filter((article) => article.position == "top");
  TopArticles.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const essentielArticles = articles.filter(
    (article) => article.position == "essentiel"
  );
  essentielArticles.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const alaune = articles.filter((article) => article.position == "alaune");
  alaune.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
  const edito = articles.filter((article) => article.position == "edito");
  edito.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });
  console.log(edito);
  return (
    <div>
      <Head>
        <title>MagEnsao</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {articles.length == 0 ? (
        <Loader></Loader>
      ) : (
        <Layout>
          {/* <Slider articles={sliderArticles}></Slider> */}
          <Edito article={edito[0]}></Edito>
          <div className={styles.topArticles}>
            <div className={styles.articles}>
              <h2 className={styles.une}>A LA UNE </h2>

              <div className={styles.uneContainer}>
                <div
                  className={styles.imgContainer}
                  style={{ backgroundImage: `url(${alaune[0].img})` }}
                ></div>
                <div className={styles.description}>
                  <p className={styles.uneSpan}>
                    {alaune[0].categorie},{" "}
                    {getFormattedDate(alaune[0].createdAt)}
                  </p>
                  <h1>{alaune[0].title}</h1>
                  <p>{alaune[0].slug}.....</p>
                  <div className={styles.Links}>
                    <a
                      className={styles.link1}
                      href={`/article/${alaune[0].id}`}
                    >
                      LIRE L' ARTICLE{" "}
                    </a>
                    <a className={styles.link2} href="/archives">
                      TOUS LES ARTICLES LIÉS
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.articles}>
              <h2 className={styles.title}>ARTICLES DU MOIS</h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {TopArticles.map(
                  (article, idx) =>
                    idx < 6 && (
                      <Thumbnail
                        key={article.id}
                        {...article}
                        margin
                      ></Thumbnail>
                    )
                )}
              </div>
            </div>
          </div>

          <Categorie
            categorie="PROF DE L'ÉDITION "
            articles={articles.filter(
              (article) => article.categorie == "ingénierie"
            )}
          ></Categorie>
          <Categorie
            categorie="ALUMINI DE L'ÉDITION "
            articles={articles.filter(
              (article) => article.categorie == "culture"
            )}
          ></Categorie>
          <Abonner></Abonner>
        </Layout>
      )}
    </div>
  );
}
