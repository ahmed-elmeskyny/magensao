//style
import styles from "./article.module.scss";

//components
import Article from "../../components/article/article";
import Layout from "../../components/Layout/layout";
import Share from "../../components/share/share";

export default function Blog() {
  return (
    <Layout>
      <div style={{ display: "flex" }}>
        <Article></Article>
        <Share></Share>
      </div>
    </Layout>
  );
}
