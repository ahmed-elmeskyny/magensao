//react
import HorizontalScroll from "react-scroll-horizontal";

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
      </div>
      <div className={styles.blogs}>
        {" "}
        <HorizontalScroll reverseScroll={true}>
          <Thumbnail
            img={categorie == "Culture" ? "/unesco.jpg" : "/machine.jpg"}
            categorie={categorie}
            titre={
              categorie == "Culture"
                ? "L’Unesco et Langages du Sud s’associent autour d’une série de livres pour enfants sur l’esclavage "
                : "Machine Learning – Définition, fonctionnement et secteurs d’application"
            }
            date="Nov 03, 2021"
          ></Thumbnail>
          <Thumbnail
            img="/artisanat.jpg"
            categorie={categorie}
            titre="Artisanat : lancement du registre national pour la généralisation de l’AMO"
            date="Fév 22 , 2022"
          ></Thumbnail>
          <Thumbnail
            img="/politique.jpg"
            categorie={categorie}
            titre="Après les propos de l’influenceuse Mayssa, un proche de MHE assure qu’il n’est “plus du tout dans le jeu politique”"
            date="Fév 22 , 2022"
          ></Thumbnail>
          <Thumbnail
            img="/culture.jpg"
            categorie={categorie}
            titre="“La poésie est invincible” : Abdellatif Laâbi, la poésie comme nature"
            date="Fév 18 , 2022"
          ></Thumbnail>
        </HorizontalScroll>
      </div>
    </div>
  );
};

export default Categorie;
