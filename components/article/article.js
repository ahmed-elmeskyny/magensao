import react from "react";

//styles
import styles from "./article.module.scss";

const Article = () => {
  return (
    <div className={styles.articleContainer}>
      <h1 className={styles.title}>
        {" "}
        Variant Omicron BA.2: les chercheurs percent ses premiers secrets
      </h1>
      <p className={styles.writer}>Par Jhon Cina, 2 Janv 2022 </p>
      <img src="/corona.jpg"></img>
      <p className={styles.article}>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Malorum by Cicero are also reproduced in their exact
        original form, accompanied by English versions from the 1914 translation
        by H. Rackham. Contrary to popular belief, Lorem Ipsum is not simply
        random text. It has roots in a piece of classical Latin literature from
        45 BC, making it over 2000 years old.
      </p>{" "}
      <p>
        Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus
        Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in
        45 BC. This book is a treatise on the theory of ethics, very popular
        during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor
        sit amet.., comes from a line in section 1.10.32. he standard chunk of
        Lorem Ipsum used since the 1500s is reproduced below for those
        interested. Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et
        Malorum by Cicero are also reproduced in their exact original form,
        accompanied by English versions from the 1914 translation by H. Rackham.
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </p>
      <p>
        {" "}
        Richard McClintock, a Latin professor at Hampden-Sydney College in
        Virginia, looked up one of the more obscure Latin words, consectetur,
        from a Lorem Ipsum passage, and going through the cites of the word in
        classical literature, discovered the undoubtable source. Lorem Ipsum
        comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum
        (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book
        is a treatise on the theory of ethics, very popular during the
        Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit
        amet.., comes from a line in section 1.10.32. he standard chunk of Lorem
        Ipsum used since the 1500s is reproduced below for those interested.
      </p>
      <p>
        {" "}
        Sections 1.10.32 and 1.10.33 from de Finibus Bonorum et Malorum by
        Cicero are also reproduced in their exact original form, accompanied by
        English versions from the 1914 translation by H. Rackham. Contrary to
        popular belief, Lorem Ipsum is not simply random text. It has roots in a
        piece of classical Latin literature from 45 BC, making it over 2000
        years old.
      </p>
    </div>
  );
};

export default Article;
