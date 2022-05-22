import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";

//style
import styles from "./episode.module.scss";

//components
import Layout from "../../components/Layout/layout";
import Loader from "../../components/loader/loader";
//db
import { klam } from "../../db/dbklam";

//react-player
import React from "react";
import ReactPlayer from "react-player/youtube";
import { useState, useEffect } from "react";
import Share from "../../components/share/share";
import { async } from "@firebase/util";

export default function Episode() {
  const [newKlam, setKlam] = useState("");
  const router = useRouter();
  const { episode } = router.query;
  const [loader, setLoader] = useState(true);

  useEffect(async () => {
    setKlam(klam.filter((episo) => episo.id == episode));

    setLoader(episode ? false : true);
    console.log(episode);
    console.log(newKlam);
  }, [episode]);

  return (
    <div>
      <Head>
        <title>MAGENSAO || Episode </title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="K-LAM 2.0"></meta>
        <meta property="og:image" content="/og1.png"></meta>
        <meta
          property="og:description"
          content="Pr. Khalid SERRAJ, Doyen de la Faculté de Médecine et de Pharmacie d'Oujda, nous accueil gracieusement dans son bureau pour le troisième épisode de notre émission. Nous entamons plusieurs sujets avec lui, notamment sa vision sur l'interdisciplinarité et la coopération entre la Faculté de Médecine et les autres établissements de l'Université."
        ></meta>
      </Head>

      {loader ? (
        <Loader></Loader>
      ) : (
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
                  {newKlam[0].episode} - {newKlam[0].guest}
                </h1>
              </div>
              <div className={styles.video}>
                <ReactPlayer
                  url={newKlam[0].link}
                  controls={true}
                  width="100%"
                  height="100%"
                ></ReactPlayer>
              </div>
              <div className={styles.description}>
                <p>
                  <span>Description :</span> {newKlam[0].description}
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
                  <span>Production:</span> {newKlam[0].production}{" "}
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
                {episode === "Pr Khalid SERRAJ" ? null : (
                  <Image
                    alt="alensao logo"
                    src="/hicham.png"
                    width="170px"
                    height="100px"
                  ></Image>
                )}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
}
