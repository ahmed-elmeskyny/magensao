//next
import styles from "./layout.module.scss";

//components
import UpperMenu from "../UpperMenu/UpperMenu";
import LowerMenu from "../LowerMenu/LowerMenu";
import Footer from "../footer/footer";

export default function Layout(props) {
  return (
    <div className={styles.container}>
      <UpperMenu></UpperMenu>
      <LowerMenu></LowerMenu>
      {props.children}
      <Footer></Footer>
    </div>
  );
}
