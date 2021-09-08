// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyD0w2UKSURfEbOC6movtclHcOtSgX_hDlk",
    authDomain: "facebook-clone-e556e.firebaseapp.com",
    projectId: "facebook-clone-e556e",
    storageBucket: "facebook-clone-e556e.appspot.com",
    messagingSenderId: "788297367930",
    appId: "1:788297367930:web:849e52d32bcaa5be2dd6c3",
    measurementId: "G-KGLCZ4138F",
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
const auth=firebase.auth();
const provider= new firebase.auth.GoogleAuthProvider();

export{auth, provider};
export default db; 