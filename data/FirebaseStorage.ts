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
      firebase.auth().onAuthStateChanged(this.onAuthStateChanged);
    }
  };

  onAuthStateChanged = (user: firebase.User | null) => {
    if (!user) {
      try {
        firebase.auth().signInAnonymously();
      } catch ({ message }) {
        console.log(message);
      }
    }
  };

  parse = (snapshot: any) => {
    const { timestamp: numberStamp, text, user } = snapshot.val();
    const { key: _id } = snapshot;
    const timestamp = new Date(numberStamp);
    return {
      _id,
      timestamp,
      text,
      user,
    };
  };

  on = (callback: (messages: any) => void) =>
    this.ref
      .limitToLast(20)
      .on("child_added", (snapshot) => callback(this.parse(snapshot)));

  send = (messages: any[]) => {
    for (let i = 0; i < messages.length; i++) {
      const { text, user } = messages[i];
      const message = {
        text,
        user,
        timestamp: this.timestamp,
      };
      this.append(message);
    }
  };

  append = (message: any) => this.ref.push(message);

  off() {
    this.ref.off();
  }
}

const instance = new FirebaseStorage();

export default instance;
