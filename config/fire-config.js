import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBGdswPIyQppHJ_qsVHAcfOVbXHhPAcOAI",
  authDomain: "magensao-bfa05.firebaseapp.com",
  projectId: "magensao-bfa05",
  storageBucket: "magensao-bfa05.appspot.com",
  messagingSenderId: "1041561721251",
  appId: "1:1041561721251:web:62f94b705ee912b7aee216",
};

const app = initializeApp(firebaseConfig);

export const fire = getFirestore(app);

export const storage = getStorage(app);

export const getFormattedDate = (milliseconds) => {
  const formatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  const date = new Date(milliseconds);
  return date.toLocaleDateString(undefined, formatOptions);
};
