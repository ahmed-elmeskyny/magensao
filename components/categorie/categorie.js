//react
import ScrollContainer from "react-indiana-drag-scroll";

//styles
import styles from "./categorie.module.scss";

//icons
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import Thumbnail from "../thumbnail/thumbnail";

const Categorie = ({ categorie }) => {
  return (
    <div className={styles.categorieContainer}>
      <div className={styles.categorie}>
        <h2>{categorie}</h2>
        <a>
          Voir les articles liés{" "}
          <BsFillArrowRightCircleFill
            style={{ marginLeft: "10px" }}
          ></BsFillArrowRightCircleFill>
        </a>
      </div>{" "}
      <ScrollContainer
        className={styles.blogs}
        vertical="flase"
        horizontal="True"
        nativeMobileScroll="True"
      >
        <Thumbnail
          img="/blog.png"
          categorie={categorie}
          titre={
            categorie == "Culture"
              ? "L’Unesco et Langages du Sud s’associent autour d’une série de livres pour enfants sur l’esclavage "
              : "Machine Learning – Définition, fonctionnement et secteurs d’application"
          }
          date="Nov 03, 2021"
        ></Thumbnail>
        <Thumbnail
          img="/blog.png"
          categorie={categorie}
          titre={
            categorie == "Culture"
              ? "Henri Cartier-Bresson, Malick Sidibé... Les expositions de photographies au MMVI se prolongent jusqu’au printemps"
              : "Utiliser les données pour repenser la ventilation des immeubles"
          }
          date="Fév 14 , 2022"
        ></Thumbnail>
        <Thumbnail
          img="/blog.png"
          categorie={categorie}
          titre="Artisanat : lancement du registre national pour la généralisation de l’AMO"
          date="Fév 22 , 2022"
        ></Thumbnail>
        <Thumbnail
          img="/blog.png"
          categorie={categorie}
          titre="Après les propos de l’influenceuse Mayssa, un proche de MHE assure qu’il n’est “plus du tout dans le jeu politique”"
          date="Fév 22 , 2022"
        ></Thumbnail>
        <Thumbnail
          img="/blog.png"
          categorie={categorie}
          titre="“La poésie est invincible” : Abdellatif Laâbi, la poésie comme nature"
          date="Fév 18 , 2022"
        ></Thumbnail>
      </ScrollContainer>
    </div>
  );
};

export default Categorie;
