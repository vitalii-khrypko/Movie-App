import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "466a3191920711785d3d0265531db629",
    authDomain: "testmovieapp-d9a69.firebaseapp.com",
    databaseURL: "https://testmovieapp-d9a69-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "testmovieapp-d9a69",
    storageBucket: "testmovieapp-d9a69.appspot.com",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };