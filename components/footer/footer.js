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
            <Link href="#">
              <RiFacebookBoxFill></RiFacebookBoxFill>
            </Link>
          </li>
          <li className={styles.icon}>
            <Link href="#">
              <RiInstagramFill></RiInstagramFill>
            </Link>
          </li>
          <li className={styles.icon}>
            <Link href="#">
              <MdEmail></MdEmail>
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.menu}>
        <ul>
          <li>
            <Link href="#">Accueil</Link>
          </li>
          <li>
            <Link href="#" onClick={() => setToggle(!toggle)}>
              Abonnement
            </Link>
          </li>
          {/* <li>
            <a href="/apropos">A propos de MagEnsao</a>
          </li> */}
          {/* <li>
            <a href="#"></a>
          </li> */}
          <li>
            <Link href="https://alensao.com/" target="_blank" rel="noreferrer">
              Alensao.com
            </Link>
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
        by{" "}
        <Link href="https://ahmedelmeskyny.vercel.app/">Ahmed El Meskyny</Link>
      </p>
    </div>
  );
};

export default Footer;
