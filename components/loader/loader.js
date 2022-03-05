//styles
import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.LoaderContainer}>
      <img src="/loader.gif"></img>
    </div>
  );
};

export default Loader;
