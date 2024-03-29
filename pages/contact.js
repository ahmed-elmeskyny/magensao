import Head from "next/head";

//styles
import styles from "../styles/contact.module.scss";

import { HiOutlineMailOpen } from "react-icons/hi";
import Link from "next/link";
//components
import Layout from "../components/Layout/layout";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>MagEnsao || Archives</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div style={{ display: "flex" }}>
          <div className={styles.contactContainer}>
            <h2>Contactez-nous</h2>
            <div className={styles.contactInfo}>
              <div className={styles.info}>
                <HiOutlineMailOpen className={styles.icon}></HiOutlineMailOpen>
                <div className={styles.text}>
                  <span>E-mail :</span>
                  <Link href="mailto:magensao@gmail.com">
                    MagEnsao@gmail.com
                  </Link>
                </div>
              </div>
            </div>
            <div className={styles.contact}>
              <form>
                <div className={styles.info}>
                  <input type="text" placeholder="Nom complet" name="name" />
                  <input type="numbre" placeholder="Téléphone" name="phone" />
                </div>
                <div className={styles.email}>
                  <input type="email" placeholder="Email" name="email" />
                  <input type="text" placeholder="Objet" name="objet" />
                </div>
                <textarea
                  type="text"
                  placeholder="Message"
                  name="message"
                ></textarea>
                <button type="submit"> Envoyez </button>
              </form>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
