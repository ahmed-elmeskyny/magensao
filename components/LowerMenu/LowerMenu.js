import Head from "next/head";

//styles
import styles from "./LowerMenu.module.scss";

//component
import ActiveLink from "../ActiveLink/ActiveLink";
export default function LowerMenu() {
  return (
    <div className={styles.LowermenuContainer}>
      <ul>
        <li>
          <ActiveLink href="/" activeClassName={styles.activeLink}>
            <a>Accueil</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/corona" activeClassName={styles.activeLink}>
            <a href="#">Coronavirus</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/politique" activeClassName={styles.activeLink}>
            <a href="#">Politique</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/sport" activeClassName={styles.activeLink}>
            <a href="#">Sport</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/ensao" activeClassName={styles.activeLink}>
            <a href="#">Ensao</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/economie" activeClassName={styles.activeLink}>
            <a href="#">Économie</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="ingenierie" activeClassName={styles.activeLink}>
            <a href="#">Ingénierie</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/culture" activeClassName={styles.activeLink}>
            <a href="#">Culture</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/societe" activeClassName={styles.activeLink}>
            <a href="#">Société</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="/archives" activeClassName={styles.activeLink}>
            <a href="#">Archives</a>
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
}
