/* eslint-disable */

import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAkaODFvdNhz1KhKe761u1L2H_tV5r3DnQ",
    authDomain: "reactnative-ec5a8.firebaseapp.com",
    projectId: "reactnative-ec5a8",
    storageBucket: "reactnative-ec5a8.appspot.com",
    messagingSenderId: "202143466438",
    appId: "1:202143466438:web:e6ce355a06c97f07df68c7",
    measurementId: "G-B6Z1JCJNLW",
    databaseURL: "default"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;