import Head from "next/head";

//styles
import styles from "./UpperMenu.module.scss";

//icons
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";

export default function UpperMenu({ toggle, setToggle }) {
  return (
    <div className={styles.UppermenuContainer}>
      <div className={styles.logo}>
        <img src="/logo1.png" width="35px"></img>
        <p>MAGENSAO</p>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.icon}>
            <a>
              <RiFacebookBoxFill></RiFacebookBoxFill>
            </a>
          </li>
          <li className={styles.icon}>
            <a>
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li className={styles.icon}>
            <a>
              <MdEmail></MdEmail>
            </a>
          </li>
        </ul>
      </div>
      {/* <div className={styles.subscribe} onClick={() => setToggle(!toggle)}>
        <p>ABONNEZ-VOUS</p>
      </div> */}
    </div>
  );
}
