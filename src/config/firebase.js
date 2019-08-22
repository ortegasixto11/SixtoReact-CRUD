import Firebase from 'firebase'
let appFirebase = Firebase.initializeApp({
  apiKey: "AIzaSyDVfXY-v52DVFOc3-hioumGRh_zkc5TGhE",
  authDomain: "sixto-react-crud.firebaseapp.com",
  databaseURL: "https://sixto-react-crud.firebaseio.com",
  projectId: "sixto-react-crud",
  storageBucket: "",
  messagingSenderId: "496622692197",
  appId: "1:496622692197:web:c09f04a811bf7cd1"
})

export const dbFirebase = appFirebase.database()