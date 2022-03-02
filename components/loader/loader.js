//styles
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <img src="/loader1.gif"></img>
      <div className={styles.logo}>
        <p>MagEnsao</p>
      </div>
    </div>
  );
};

export default Loader;
