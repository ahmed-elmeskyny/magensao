//styles
import styles from "./footer.module.scss";

//icons
import { RiFacebookBoxFill, RiInstagramFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";

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
          <li>
            <a href="/apropos">A propos de MagEnsao</a>
          </li>
          {/* <li>
            <a href="#"></a>
          </li> */}
          <li>
            <a href="https://alensao.com/" target="_blank">
              Alensao
            </a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
      <div className={styles.links}>
        <ul>
          <li className={styles.special}>
            <img src="/alensao.png" width="40px"></img>
            <a href="https://alensao.com/" target="_blank">
              alensao
            </a>
          </li>
          <li className={styles.special}>
            <a href="https://alensao.com/emission" target="_blank">
              {" "}
              <img src="/klam.png" width="150px"></img>
            </a>
          </li>
          <li className={styles.special}>
            <img src="/unicard.png" width="40px"></img>
            <a href="https://alensao.com/unicard" target="_blank">
              unicard
            </a>
          </li>
        </ul>
      </div>

      <div className={styles.logo}>
        <img src="/logo.png" width="50px"></img>
        <p>MagEnsao</p>
      </div>
      <p className={styles.creator}>
        by <a>Ahmed El meskyny</a>
      </p>
    </div>
  );
};

export default Footer;
