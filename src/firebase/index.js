//import { set } from 'core-js/core/dict';
//mport { reject, resolve } from 'core-js/fn/promise';

import firebase from 'firebase';
import store from '@/store/index';
const settings = {timestampsInSnapshots: true};
//import store from '../store'
/*const settings = {
    timestampsInSnapshots:true
}*/
const fbconfig= {
    apiKey: "AIzaSyAWV0Qso22wUmY5TJvO9IVr39WA2rmJerI",
  authDomain: "hospital-a2ad7.firebaseapp.com",
  projectId: "hospital-a2ad7",
  storageBucket: "hospital-a2ad7.appspot.com",
  messagingSenderId: "1022104933979",
  appId: "1:1022104933979:web:addecba0f371fe46dd917e"
}
firebase.initializeApp(fbconfig);
/*const auth = firebase.auth();
auth.useEmulator("http://localhost:9099 ");
firebase.functions().useEmulator("localhost",5001)

var db = firebase.firestore();
if (location.hostname === "localhost") {
  db.useEmulator("localhost", 8080);
}
*/
firebase.firestore().settings(settings);

firebase.auth().onAuthStateChanged(user=>{
    store.dispatch("fetchUser", user);
    
});

firebase.getCurrentUser  = () => {
    return new Promise((resolve,reject)=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            unsubscribe();
            resolve(user);
        }, reject);
    });
}

export default firebase;

/*
firebase.firestore().settings(settings);
firebase.auth().onAuthStateChanged(user =>{
    store.dispatch('fetchUser',user);
});

firebase.getCurrentUser = ()=>{
    return new Promise((resolve,reject)=>{
        const unsubscribe = firebase.auth().onAuthStateChanged(user=>{
            unsubscribe();
            resolve(user);
        },reject);
    })
};*/
