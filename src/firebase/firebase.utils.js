import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

const config = {
  apiKey: "AIzaSyC1-l2x-QlKyO-D2GoKrBWRRJbLal02Za4",
  authDomain: "reacommerce-firebase.firebaseapp.com",
  databaseURL: "https://reacommerce-firebase.firebaseio.com",
  projectId: "reacommerce-firebase",
  storageBucket: "reacommerce-firebase.appspot.com",
  messagingSenderId: "1085546986962",
  appId: "1:1085546986962:web:bf77db5c8370780e089c0b",
  measurementId: "G-B72CB2KBQZ"
}

firebase.initializeApp(config)

export const auth = firebase.auth()

export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: "select_account" })

export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
