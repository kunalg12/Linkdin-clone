import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyCzFyMLwQC6YW_i_P2Kz-LvVPJ3zlUqIgc",
    authDomain: "linkedin-clone-e94f1.firebaseapp.com",
    projectId: "linkedin-clone-e94f1",
    storageBucket: "linkedin-clone-e94f1.appspot.com",
    messagingSenderId: "704386957921",
    appId: "1:704386957921:web:d2a8707b4681264a60e020"
  };


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db ,auth};
  export default firebase;
  

  