//sticky
import React from "react";
import StickyBox from "react-sticky-box";

//style
import styles from "./share.module.scss";

//icons
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";

const Share = () => {
  return (
    <div className={styles.mobile}>
      <StickyBox offsetTop={20} offsetBottom={20}>
        <div className={styles.shareContainer}>
          <h2>Inscrivez-vous à notre news-lettre</h2>
          <p>
            recevoir les derniers articles directement dans votre boîte de
            réception
          </p>
          <input type="email" placeholder="Votre E-mail"></input>
          <button type="submit">inscrivez-vous</button>
          <div className={styles.socialShare}>
            <span>Share</span>
            <a>
              <RiFacebookBoxFill></RiFacebookBoxFill>
            </a>
            <a>
              <RiInstagramFill></RiInstagramFill>
            </a>
          </div>
          <p>Bonne lecture &#128513;</p>
        </div>
      </StickyBox>
    </div>
  );
};

export default Share;
