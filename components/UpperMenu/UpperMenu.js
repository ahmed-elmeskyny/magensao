import Head from "next/head";

//styles
import styles from "./UpperMenu.module.scss";

//icons
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

export default function UpperMenu({ toggle, setToggle }) {
  return (
    <div className={styles.UppermenuContainer}>
      <div className={styles.logo}>
        <img src="/logo1.png" width="35px"></img>
        <p>MAGENSAO</p>
      </div>
      <div className={styles.edition}>
        <p>
          <span>&laquo;</span> le magazine de l&apos;ingénieur par excellence{" "}
          <span>&raquo;</span>
        </p>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.icon}>
            <a
              href="https://www.facebook.com/profile.php?id=100079938348671"
              target="_blank"
              rel="noreferrer"
            >
              <RiFacebookBoxFill></RiFacebookBoxFill>
            </a>
          </li>
          <li className={styles.icon}>
            <a
              href="https://www.instagram.com/mag__ensao/?igshid=YmMyMTA2M2Y%3D"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillInstagram></AiFillInstagram>
            </a>
          </li>
          <li className={styles.icon}>
            <a
              href="https://www.linkedin.com/company/magensao/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin></FaLinkedin>
            </a>
          </li>
          <li className={styles.icon}>
            <a
              href="mailto:magensao@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
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
