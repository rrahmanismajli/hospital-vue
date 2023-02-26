//import { set } from 'core-js/core/dict';
//mport { reject, resolve } from 'core-js/fn/promise';
import {initializeApp} from 'firebase/app'
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

const app = initializeApp(fbconfig);
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
export default app;