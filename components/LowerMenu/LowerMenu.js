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
    onSnapshot(collection(fire, "février2024"), (snapshot) => {
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
            <Link href="/">Accueil</Link>
          </ActiveLink>
        </li>
        {rubrique1.map((rub) => (
          <li key={rub.id}>
            <ActiveLink
              href={`/article/${rub.id}?edition=${rub.edition}`}
              activeClassName={styles.activeLink}
            >
              <Link href={`/article/${rub.id}?edition=${rub.edition}`}>
                {rub.categorie}
              </Link>
            </ActiveLink>
          </li>
        ))}
        <li>
          <Link href="/klam" className={styles.special}>
            <img src="/klam.png" width="100px"></img>
          </Link>
        </li>
        <li>
          <ActiveLink href="/chroniqueurs" activeClassName={styles.activeLink}>
            <Link href="/chroniqueurs">Chroniqueurs</Link>
          </ActiveLink>
        </li>

        <li>
          <ActiveLink href="/team" activeClassName={styles.activeLink}>
            <Link href="/team">Team</Link>
          </ActiveLink>
        </li>
      </ul>
    </div>
  );
}
