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
import Link from "next/link";
//firebase
import { fire } from "../config/fire-config";
import { collection, onSnapshot } from "firebase/firestore";

export default function Home() {
  const [articles, setarticles] = useState([]);
  useEffect(() => {
    onSnapshot(collection(fire, "février2024"), (snapshot) => {
      setarticles(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const autre = articles.filter((article) => article.position == "autre");
  const alaune = articles.filter((article) => article.position == "alaune");
  const edito = articles.filter((article) => article.position == "edito");
  const prof = articles.filter((article) => article.position == "prof");
  const alumini = articles.filter((article) => article.position == "alumini");

  return (
    <div style={{ width: "100%" }}>
      <Head>
        <title>MagEnsao</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="1er magazine confectionné par des jeunes élèves ingénieurs de l'ENSAO ,l'école nationale des sciences appliquées d'Oujda .
Son but est d'instruire l'élève ingénieur en l'approchant le plus possible du marché de travail et aussi afin de lui présenter toutes les nouvelles technologies qui existent et dont il aura besoin pour sa carrière professionnelle."
        />
        <meta property="og:title" content="Magesnao"></meta>
        <meta
          property="og:description"
          content="1er magazine confectionné par des jeunes élèves ingénieurs de l'ENSAO ,l'école nationale des sciences appliquées d'Oujda .
Son but est d'instruire l'élève ingénieur en l'approchant le plus possible du marché de travail et aussi afin de lui présenter toutes les nouvelles technologies qui existent et dont il aura besoin pour sa carrière professionnelle."
        ></meta>
      </Head>

      {articles.length == 0 ? (
        <Loader></Loader>
      ) : (
        <Layout>
          {/* <Slider articles={sliderArticles}></Slider> */}

          {/* <div className={styles.fixed}>
            <p>N°9 DU 1 AU 30 AVRIL 2022</p>
          </div> */}
          {/* <div className={styles.fixed1}>
            <p>N°9 DU 1 AU 30 AVRIL 2022</p>
          </div>
          <div className={styles.fixed2}>
            <p></p>
          </div>
          <div className={styles.fixed3}>
            <p>N°9 DU 1 AU 30 AVRIL 2022</p>
          </div> */}
          <div className={styles.edition}>
            <p>
              <span>&laquo;</span> le magazine de l&apos;ingénieur par
              excellence <span>&raquo;</span>
            </p>
          </div>
          {/* <div
            className={styles.hiring}
            style={{ backgroundImage: "URL(/hiringback.png)" }}
          >
            <div className={styles.filter}>
              <img src="/megaphone.png" width="100px"></img>
              <div className={styles.text}>
                <h2>&quot;We are recruting&quot; </h2>
                <a href="https://forms.gle/tjBp5wCFaxzJhaPY9">
                  Click Here to apply
                </a>
              </div>
            </div>
          </div> */}
          <Edito article={edito[0]}></Edito>
          <div className={styles.topArticles}>
            <div className={styles.articles}>
              <h2 className={styles.une}>A LA UNE </h2>

              <div className={styles.uneContainer}>
                <div
                  className={styles.imgContainer}
                  style={{
                    backgroundImage: `url(${alaune[0].img})`,
                    backgroundPosition: "center",
                  }}
                ></div>
                <div className={styles.description}>
                  <p className={styles.uneSpan}>{alaune[0].categorie}</p>
                  <h1>{alaune[0].title}</h1>
                  <p>{alaune[0].slug}.....</p>
                  <div className={styles.Links}>
                    <Link
                      className={styles.link1}
                      href={`/article/${alaune[0].id}?edition=${alaune[0].edition}`}
                    >
                      LIRE L&apos;ARTICLE{" "}
                    </Link>
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
                  justifyContent: "center",
                }}
              >
                {autre.map(
                  (article, idx) =>
                    idx < 6 && (
                      <Thumbnail
                        key={article.id}
                        {...article}
                        edition={article.edition}
                        margin
                      ></Thumbnail>
                    )
                )}
              </div>
            </div>
          </div>

          <Categorie prof={prof[0]} alumini={alumini[0]}></Categorie>
          <Abonner></Abonner>
        </Layout>
      )}
    </div>
  );
}
