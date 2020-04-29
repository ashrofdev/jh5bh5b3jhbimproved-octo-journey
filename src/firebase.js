import firebase from 'firebase/app'
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
    apiKey: "AIzaSyDbQC-boll7v4GuDs3jffCFaP0BQ-odb00",
    authDomain: "citizeninvestments-98fe8.firebaseapp.com",
    databaseURL: "https://citizeninvestments-98fe8.firebaseio.com",
    projectId: "citizeninvestments-98fe8",
    storageBucket: "citizeninvestments-98fe8.appspot.com",
    messagingSenderId: "664843120935",
    appId: "1:664843120935:web:6f6bbdb7f455f264653902",
    measurementId: "G-1QD1BRXJP4"
  };
firebase.initializeApp(firebaseConfig);

const firebaseDB = firebase.database();

export {
    firebase,
    firebaseDB
}