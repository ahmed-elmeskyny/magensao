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
            <a>Acceuil</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Coronavirus</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Politique</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Sport</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Ensao</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Économie</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Ingénierie</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Culture</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Société</a>
          </ActiveLink>
        </li>
        <li>
          <ActiveLink href="#" activeClassName={styles.activeLink}>
            <a href="#">Archives</a>
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
}
