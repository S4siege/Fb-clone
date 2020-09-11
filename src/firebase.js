import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBQJ7M2pjib5gzeUzzu9ynpniQY3R0KGW8",
    authDomain: "facebook-clone-1246d.firebaseapp.com",
    databaseURL: "https://facebook-clone-1246d.firebaseio.com",
    projectId: "facebook-clone-1246d",
    storageBucket: "facebook-clone-1246d.appspot.com",
    messagingSenderId: "146990107270",
    appId: "1:146990107270:web:6bde11861f1cd7d192df07",
    measurementId: "G-2M9615LVVE"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  const auth = firebase.auth();

  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider}
  export default db