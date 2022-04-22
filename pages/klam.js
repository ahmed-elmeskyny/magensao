//next
import Image from "next/image";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

//style
import styles from "../styles/klam.module.scss";

//react-player
import React from "react";
import ReactPlayer from "react-player/youtube";

//react-icons
import { AiFillYoutube } from "react-icons/ai";

//db
import { klam } from "../db/dbklam";

import Layout from "../components/Layout/layout";
import Loader from "../components/loader/loader";

const Klam = () => {
  const router = useRouter();
  const [loader, setLoader] = useState(true);
  useEffect(async () => {
    setLoader(false);
  }, []);

  return (
    <div>
      {loader ? (
        <Loader></Loader>
      ) : (
        <Layout>
          <div className={styles.emissionMainContainer}>
            <div className={styles.klam}>
              <div className={styles.video}>
                <ReactPlayer
                  url="https://youtu.be/a7EKqob5VBU"
                  controls={true}
                  width="100%"
                  height="100%"
                ></ReactPlayer>
              </div>
              <div className={styles.description}>
                <Image
                  alt="k-lam 2.0 logo"
                  src="/klam.png"
                  width="170px"
                  height="30px"
                  className={styles.hover}
                ></Image>
                <p>
                  Etant des élèves ingénieurs, à l&apos;Ecole Nationale des
                  Sciences Appliquées d&apos;Oujda, il est de notre devoir
                  d&apos;être instruits et conscients des situations sociales et
                  économiques de la région, et du Royaume. C&apos;est dans ce
                  cadre que nous avons lancé une émission nommée &quot;K-LAM
                  2.0&quot;. Son but étant d&apos;inviter des personnalités de
                  haut calibre, afin de dialoguer avec eux sur des points
                  socio-économiques qui intéressent le développement de notre
                  pays.
                </p>
              </div>
            </div>
            <div className={styles.season}>
              {/* <h2>2021</h2> */}
              <div className={styles.episodes}>
                {klam.map((episode) => {
                  return (
                    <a
                      className={styles.episode}
                      key={episode.id}
                      href={`klam/${episode.id}`}
                    >
                      <div
                        className={styles.img}
                        style={{ backgroundImage: `url(${episode.thumbnail})` }}
                      ></div>
                      <p> {episode.episode} </p>
                      <p> {episode.guest}</p>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </Layout>
      )}
    </div>
  );
};

export default Klam;
