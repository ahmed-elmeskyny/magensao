import Head from "next/head";

import styles from "../styles/apropos.module.scss";

//components
import Layout from "../components/Layout/layout";
import Abonn from "../components/abonner/abonner";

export default function Archives() {
  return (
    <div>
      <Head>
        <title>MagEnsao || Archives</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {/* <div className={styles.speechContainer}>
          <div className={styles.motContainer}>
            <h2>
              {" "}
              <div></div>Mot du Président de l&apos;ALENSAO{" "}
            </h2>
            <div className={styles.mot}>
              <div className={styles.img}></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className={styles.sgnature}>
              <p>MELHAOUI OUASSIM</p>
              <p>Promotion 2005 , Génie informatique</p>
            </div>
          </div>
          <div className={styles.motContainer}>
            <h2>
              {" "}
              <div></div> Mot de MagEnsao{" "}
            </h2>
            <div className={styles.mot}>
              <div
                className={styles.img}
                style={{ backgroundImage: "url(/logo.png)" }}
              ></div>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry&apos;s standard
                dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book. It
                has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.electronic typesetting, remaining essentially
                unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more
                recently with desktop publishing software like Aldus PageMaker
                including versions of Lorem Ipsum.electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s
                with the release of Letraset sheets containing Lorem Ipsum
                passages, and more recently with desktop publishing software
                like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
            <div className={styles.sgnature}>
              <p>Equipe MagEnsao</p>
              <p>MagEnsao &#9400; , 2022</p>
            </div>
          </div>
        </div>
        <div className={styles.aproposContainer}>
          <h2>
            {" "}
            <div></div> A propos de MagEnsao
          </h2>
          <p>
            {" "}
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div> */}
        <div className={styles.tree}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/aya.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Aya BOULBALI</h5>
                <p>Directrice de Publication</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/president.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Ouassim MELHAOUI</h5>
                <p>pilotage</p>
              </div>
            </div>
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/youssef.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Youssef LBOUR</h5>
                <p>pilotage</p>
              </div>
            </div>
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/amina.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Amina Elkadi</h5>
                <p>pilotage</p>
              </div>
            </div>
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/adnane.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Adnane EL KHATIB</h5>
                <p>Pilotage</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/ihab.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Ihab BIZIZ</h5>
                <p>Responsable de Design</p>
                <p> Digital Editing</p>
              </div>
            </div>
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/haytham.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Haytham OURYEMCHI </h5>
                <p>Reporter</p>
              </div>
            </div>
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/ahmed.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Ahmed EL MESKYNY</h5>
                <p>Digital Editor</p>
              </div>
            </div>
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/ayoub.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Ayoub BELHAJ</h5>
                <p>Responsable sponsoring </p>
                <p> Reporter</p>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",

              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <div className={styles.profile}>
              <div
                className={styles.pdp}
                style={{ backgroundImage: "url(/mayssae.jpeg)" }}
              ></div>
              <div className={styles.name}>
                <h5>Mayssae SOUHIR</h5>
                <p>Reporter</p>
              </div>
            </div>
          </div>
        </div>
        <Abonn></Abonn>
      </Layout>
    </div>
  );
}
