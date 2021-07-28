import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDWXwiFpUjrIoebVz2SfSedLsI3yNfugdY",
  authDomain: "authenticate-c0e0e.firebaseapp.com",
  databaseURL: "izdunvudunzvrgurdus",
  projectId: "authenticate-c0e0e",
  storageBucket: "authenticate-c0e0e.appspot.com",
  messagingSenderId: "419298424656",
  appId: "1:419298424656:web:86e60a48550cbacb145e55"
})

export const auth = app.auth()
export default app