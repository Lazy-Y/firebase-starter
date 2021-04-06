import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyB-7lflmL4jSLwKDT6BJH3AXyRjqKGZaHU",
  authDomain: "fir-starter-2be92.firebaseapp.com",
  projectId: "fir-starter-2be92",
  storageBucket: "fir-starter-2be92.appspot.com",
  messagingSenderId: "934082746192",
  appId: "1:934082746192:web:9676c05104b226e4b17e55"
};
const app = firebase.initializeApp(firebaseConfig);

export default app;
