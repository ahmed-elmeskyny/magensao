import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

//style
import styles from "./episode.module.scss";

//components
import Layout from "../../components/Layout/layout";

//db
import { klam } from "../../db/dbklam";

//react-player
import React from "react";
import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import Share from "../../components/share/share";

export default function Episode() {
  const router = useRouter();
  const { episode } = router.query;
  const guest = episode;
  const newKlam = klam.find((episode) => episode.guest === guest);

  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    setLoader(false);
  }, [klam]);

  return (
    <div>
      <Head>
        <title>Alensao || Episode </title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="K-LAM 2.0"></meta>
        <meta property="og:image" content="/og1.png"></meta>
        <meta
          property="og:description"
          content="Pr. Khalid SERRAJ, Doyen de la Faculté de Médecine et de Pharmacie d'Oujda, nous accueil gracieusement dans son bureau pour le troisième épisode de notre émission. Nous entamons plusieurs sujets avec lui, notamment sa vision sur l'interdisciplinarité et la coopération entre la Faculté de Médecine et les autres établissements de l'Université."
        ></meta>
      </Head>
      <Layout>
        <div style={{ display: "flex" }}>
          <div className={styles.episodeInfo}>
            <div className={styles.episodeTitle}>
              <Image
                alt="k-lam 2.0 logo"
                src="/klam.png"
                width="170px"
                height="30px"
              ></Image>
              <h1>
                {newKlam.episode} - {newKlam.guest}
              </h1>
            </div>
            <div className={styles.video}>
              <ReactPlayer
                url={newKlam.link}
                controls={true}
                width="100%"
                height="100%"
              ></ReactPlayer>
            </div>
            <div className={styles.description}>
              <p>
                <span>Description :</span> {newKlam.description}
              </p>
              <p>
                <span>Pilotage:</span> Mohammed-Ayoub El Maftouhi{" "}
              </p>
              <p>
                <span>Proposé par :</span> Ouassim Melhaoui{" "}
              </p>
              <p>
                <span>Présenté par :</span> Mohammed-Ayoub El Maftouhi{" "}
              </p>
              <p>
                <span>Production:</span> {newKlam.production}{" "}
              </p>
            </div>
            <div className={styles.logos}>
              <Image
                alt="alensao logo"
                src="/logo.png"
                width="170px"
                height="100px"
              ></Image>
              <Image
                alt="alensao logo"
                src="/ade.png"
                width="100px"
                height="100px"
              ></Image>
              {guest === "Pr Khalid SERRAJ" ? null : (
                <Image
                  alt="alensao logo"
                  src="/hicham.png"
                  width="170px"
                  height="100px"
                ></Image>
              )}
            </div>
          </div>
          <Share></Share>
        </div>
      </Layout>
    </div>
  );
}
