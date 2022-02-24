import Head from "next/head";

//styles
import styles from "./UpperMenu.module.scss";

//icons
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

export default function UpperMenu({ toggle, setToggle }) {
  return (
    <div className={styles.UppermenuContainer}>
      <div className={styles.logo}>
        <img src="/logo.png" width="35px"></img>
        <p>MagEnsao</p>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.special}>
            <img src="/alensao.png" width="20px"></img>
            <a href="https://alensao.com/" target="_blank">
              alensao
            </a>
          </li>
          <li className={styles.special}>
            <a href="https://alensao.com/emission" target="_blank">
              {" "}
              <img src="/klam.png" width="120px"></img>
            </a>
          </li>
          <li className={styles.special}>
            <img src="/unicard.png" width="25px"></img>
            <a href="https://alensao.com/unicard" target="_blank">
              unicard
            </a>
          </li>
          <li className={styles.icon}>
            <a>
              <RiFacebookBoxFill></RiFacebookBoxFill>
            </a>
          </li>
          <li className={styles.icon}>
            <a>
              <RiInstagramFill></RiInstagramFill>
            </a>
          </li>
          <li className={styles.icon}>
            <a>
              <MdEmail></MdEmail>
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.subscribe} onClick={() => setToggle(!toggle)}>
        <p>ABONNEZ-VOUS</p>
      </div>
    </div>
  );
}
