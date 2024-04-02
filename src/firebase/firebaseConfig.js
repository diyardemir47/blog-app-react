import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyCbiqrY432ILJMVUnTNNg7zdqDpnsBHUsg",
    authDomain: "react-blog-app-65127.firebaseapp.com",
    projectId: "react-blog-app-65127",
    databaseURL: "https://react-blog-app-65127-default-rtdb.firebaseio.com/", // Firebase Realtime Database URL'sini buraya ekleyin
    storageBucket: "react-blog-app-65127.appspot.com",
    messagingSenderId: "927897396458",
    appId: "1:927897396458:web:87b0d3a4a83e5e4cab6393",
    measurementId: "G-XMTHHH4Z60"
};

//BAĞLAMA İŞLEMİİİ
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
 
export {
    database as default
}