//styles
import styles from "./layout.module.scss";
//react
import React, { useState } from "react";

//components
import UpperMenu from "../UpperMenu/UpperMenu";
import LowerMenu from "../LowerMenu/LowerMenu";
import Footer from "../footer/footer";
import Popup from "../popup/popup";

export default function Layout(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={styles.container}>
      <Popup toggle={toggle} setToggle={setToggle}></Popup>
      <UpperMenu toggle={toggle} setToggle={setToggle}></UpperMenu>
      <LowerMenu></LowerMenu>
      {props.children}
      <Footer></Footer>
    </div>
  );
}
