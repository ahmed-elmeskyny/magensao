//next
import { useRouter } from "next/router";

//react
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
  const { article } = router.query;

  useEffect(async () => {
    const docRef = doc(fire, "articles", `${article}`);
    const docSnap = await getDoc(docRef);
    setArticle(docSnap.data());
    setLoader(false);
  }, [article]);

  console.log(article);
  console.log(articleData);

  return (
    <div>
      {loader ? (
        <Loader></Loader>
      ) : (
        <Layout>
          <div style={{ display: "flex" }}>
            <Article {...articleData}></Article>
            <Share></Share>
          </div>
        </Layout>
      )}
    </div>
  );
}
