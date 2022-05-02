//styles
import styles from "./footer.module.scss";

//icons
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

import Link from "next/link";

const Footer = ({ toggle, setToggle }) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.social}>
        <p>Suivez-nous</p>
        <ul>
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
      <div className={styles.menu}>
        <ul>
          <li>
            <a>Accueil</a>
          </li>
          <li>
            <a href="#" onClick={() => setToggle(!toggle)}>
              Abonnement
            </a>
          </li>
          {/* <li>
            <a href="/apropos">A propos de MagEnsao</a>
          </li> */}
          {/* <li>
            <a href="#"></a>
          </li> */}
          <li>
            <a href="https://alensao.com/" target="_blank" rel="noreferrer">
              Alensao.com
            </a>
          </li>
          <li>
            <Link href="/archives">Archives</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>

      <div className={styles.logo}>
        <img src="/logo1.png" width="50px"></img>
        <p>MAGENSAO</p>
      </div>
      <p className={styles.creator}>
        by <a href="https://ahmedelmeskyny.vercel.app/">Ahmed El Meskyny</a>
      </p>
    </div>
  );
};

export default Footer;
