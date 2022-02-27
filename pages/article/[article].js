//style
import styles from "./article.module.scss";

//components
import Article from "../../components/article/article";
import Layout from "../../components/Layout/layout";
import Share from "../../components/share/share";
import Abonner from "../../components/abonner/abonner";

export default function Blog() {
  // const [articles, setarticles] = useState([]);
  // useEffect(() => {
  //   onSnapshot(
  //     collection(fire, "articles"),

  //     (snapshot) => {
  //       setarticles(
  //         snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
  //       );
  //     }
  //   );
  // }, []);
  // console.log(articles);

  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <Article></Article>
        <Share></Share>
      </div>
    </Layout>
  );
}
