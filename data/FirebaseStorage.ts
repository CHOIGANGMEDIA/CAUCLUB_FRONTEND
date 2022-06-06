import { getApps } from "firebase/app";
import firebase from "firebase/compat";

class FirebaseStorage {
  constructor() {
    this.init();
  }

  get ref() {
    return firebase.database().ref("chatService");
  }

  get timestamp() {
    return firebase.database.ServerValue.TIMESTAMP;
  }

  init = () => {
    if (!getApps().length) {
      const firebaseConfig = {
        apiKey: "AIzaSyDwCeuS6YAeVXVTbKeOgMPoN1VIzZaAMpI",
        authDomain: "cauclub1.firebaseapp.com",
        databaseURL: "https://cauclub1-default-rtdb.firebaseio.com",
        projectId: "cauclub1",
        storageBucket: "cauclub1.appspot.com",
        messagingSenderId: "75062907686",
        appId: "1:75062907686:web:ddda87f8ca71a03c6e27e7",
        measurementId: "G-P5N4F8HTY6",
      };
      firebase.initializeApp(firebaseConfig);
    }
  };
}

const instance = new FirebaseStorage();

export default instance;
