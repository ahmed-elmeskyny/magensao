import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";

//styles
import styles from "./LowerMenu.module.scss";

//firebase
import { fire } from "../../config/fire-config";
import { collection, onSnapshot } from "firebase/firestore";

//component
import ActiveLink from "../ActiveLink/ActiveLink";

export default function LowerMenu() {
  const [rubrique, setRubrique] = useState([]);
  useEffect(() => {
    onSnapshot(collection(fire, "avril2022"), (snapshot) => {
      setRubrique(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
  }, []);

  const rubrique1 = rubrique.filter(
    (article) => article.position == "rubrique"
  );

  return (
    <div className={styles.LowermenuContainer}>
      <ul>
        <li>
          <ActiveLink href="/" activeClassName={styles.activeLink}>
            <a>Accueil</a>
          </ActiveLink>
        </li>
        {rubrique1.map((rub) => (
          <li key={rub.id}>
            <ActiveLink
              href={`/article/${rub.id}`}
              activeClassName={styles.activeLink}
            >
              <a>{rub.categorie}</a>
            </ActiveLink>
          </li>
        ))}
        {/* <li>
          <ActiveLink href="/coronavirus" activeClassName={styles.activeLink}>
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
        </li> */}
        <li>
          <ActiveLink href="/archives" activeClassName={styles.activeLink}>
            <a href="#">Archives</a>
          </ActiveLink>
        </li>
        <li>
          <Link href="/klam" className={styles.special}>
            <img src="/klam.png" width="100px"></img>
          </Link>
        </li>
      </ul>
    </div>
  );
}
