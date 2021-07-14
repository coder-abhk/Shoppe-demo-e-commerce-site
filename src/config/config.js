import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDWuEzVS3CdNIlOhq1bi1O6T92IBdY-V_c",
  authDomain: "shoppe-979eb.firebaseapp.com",
  projectId: "shoppe-979eb",
  storageBucket: "shoppe-979eb.appspot.com",
  messagingSenderId: "349113270617",
  appId: "1:349113270617:web:032b1270ad236f211bcc48",
  measurementId: "G-17GZTT1PH2",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
export { auth };
