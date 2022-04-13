import Head from "next/head";
import dynamic from "next/dynamic";

//react
import react, { useState } from "react";
import { useForm } from "react-hook-form";

//styles
import styles from "../styles/admin.module.scss";
import "react-quill/dist/quill.snow.css";

//firebase
import { fire, storage } from "../config/fire-config";
import { collection, addDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import Loader from "../components/loader/loader";

const QuillNoSSRWrapper = dynamic(import("react-quill"), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image", "video"],
    ["clean"],
  ],
  clipboard: {
    matchVisual: false,
  },
};

const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "video",
];

export default function Home() {
  const { register, handleSubmit, reset } = useForm();
  const [loader, setLoader] = useState(false);
  const [value, setValue] = useState("");

  const onSubmit = (data) => {
    setLoader(true);
    console.log(loader);

    try {
      const storage = getStorage();
      const imgRef = ref(storage, data.img[0].name);
      uploadBytes(imgRef, data.img[0]).then((snapshot) => {
        console.log("Uploaded a blob or file!");
        getDownloadURL(imgRef).then(async (url) => {
          const docRef = await addDoc(collection(fire, `${data.edition}`), {
            ...data,
            article: value,
            img: url,
            createdAt: new Date().getTime(),
          });
        });
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setLoader(false);
    setValue("");
  };

  return (
    <div>
      <Head>
        <title>MagEnsao</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.adminPage}>
        <div className={styles.logo}>
          <img src="/logo1.png" width="35px"></img>
          <p>MagEnsao</p>
        </div>
        <label>l&apos;Article :</label>
        <QuillNoSSRWrapper
          modules={modules}
          formats={formats}
          value={value}
          onChange={setValue}
          theme="snow"
        />
        {loader ? (
          <Loader></Loader>
        ) : (
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.form}>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <label>Titre :</label>
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        placeholder="entrez le titre"
                        {...register("title", {
                          required: "Ce champ est obligatoire",
                        })}
                      ></input>
                    </td>
                    <td>
                      <label>Écrit par :</label>
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        placeholder="entrez l'auteur"
                        {...register("author", {
                          required: "Ce champ est obligatoire",
                        })}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>placer l&apos;article :</label>
                    </td>
                    <td>
                      {" "}
                      <select
                        {...register("position", {
                          required: "Ce champ est obligatoire",
                        })}
                      >
                        <option value="edito">edito</option>
                        <option value="rubrique">rubrique</option>
                        <option value="alaune">A la une</option>
                        <option value="prof"> prof de l'edition</option>
                        <option value="alumini"> alumini de l'edition</option>
                        <option value="autre">autre</option>
                      </select>
                    </td>
                    <td>
                      <label>Categorie :</label>
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        placeholder="entrez la categorie"
                        {...register("categorie", {
                          required: "Ce champ est obligatoire",
                        })}
                      ></input>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <label>partie de l&apos;article : </label>
                    </td>
                    <td>
                      {" "}
                      <input
                        type="text"
                        placeholder=" ..... s'il appartient au edito/alaune"
                        {...register("slug")}
                      ></input>
                    </td>
                    <td>
                      <label>image de l&apos;auteur :</label>
                    </td>
                    <td>
                      {" "}
                      <input
                        type="file"
                        placeholder="entrez l'image"
                        {...register("img", {
                          required: "Ce champ est obligatoire",
                        })}
                      ></input>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <label>Edition : </label>
                    </td>
                    <td>
                      <input
                        type="text"
                        placeholder="ex:  avril2021 / mars2022"
                        {...register("edition", {
                          required: "Ce champ est obligatoire",
                        })}
                      ></input>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <button type="submit"> Ajouter </button>
          </form>
        )}
      </div>
    </div>
  );
}
