//next
import { useRouter } from "next/router";
import Head from "next/head";
//reac
import { useState, useEffect } from "react";

//style
import styles from "./article.module.scss";

//components
import Article from "../../components/article/article";
import Layout from "../../components/Layout/layout";
import Share from "../../components/share/share";
import Abonner from "../../components/abonner/abonner";
import Loader from "../../components/loader/loader";

//utils
import { fire } from "../../config/fire-config";
import { doc, getDoc } from "firebase/firestore";

export default function Blog() {
  const [articleData, setArticle] = useState("");
  const [loader, setLoader] = useState(true);

  const router = useRouter();
  const { article, edition } = router.query;

  useEffect(async () => {
    const docRef = doc(fire, `${edition}`, `${article}`);
    const docSnap = await getDoc(docRef);
    setArticle(docSnap.data());
    setLoader(false);
  }, [article]);

  return (
    <div>
      <Head>
        <title>MAGENSAO || Article </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {loader ? (
        <Loader></Loader>
      ) : (
        <Layout>
          <div style={{ display: "flex" }}>
            <Article {...articleData}></Article>
          </div>
        </Layout>
      )}
    </div>
  );
}
