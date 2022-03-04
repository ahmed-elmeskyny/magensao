import Head from "next/head";
import { useEffect, useState } from "react";

import styles from "../styles/categories.module.scss";

//components
import Layout from "../components/Layout/layout";
import Share from "../components/share/share";
import Thumbnail from "../components/thumbnail/thumbnail";
import Loader from "../components/loader/loader";

//firebase
import { fire } from "../config/fire-config";
import { collection, onSnapshot, orderBy } from "firebase/firestore";

export default function Archives() {
  const [articles, setarticles] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    onSnapshot(
      collection(fire, "articles"),
      orderBy("createdAt"),

      (snapshot) => {
        setarticles(
          snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
        );
      }
    );
  }, []);

  const coronaArticles = articles.filter(
    (article) => article.categorie == "coronavirus"
  );
  coronaArticles.sort((a, b) => {
    return b.createdAt - a.createdAt;
  });

  const filterArticles = coronaArticles.filter((article) =>
    article.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>MagEnsao || Corona</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {articles.length == 0 ? (
        <Loader></Loader>
      ) : (
        <Layout>
          <div style={{ display: "flex" }}>
            <div className={styles.pageContainer}>
              <div className={styles.title}>
                <h1>Coronavirus</h1>
                <input
                  type="text"
                  placeholder="Recherher par titre d'article"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                ></input>
              </div>
              <div className={styles.articles}>
                {filterArticles.map((article) => (
                  <Thumbnail
                    img="/blog.png"
                    key={article.id}
                    {...article}
                  ></Thumbnail>
                ))}
              </div>
            </div>
            <Share></Share>
          </div>
        </Layout>
      )}
    </div>
  );
}
