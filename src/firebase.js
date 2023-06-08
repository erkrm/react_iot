// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBBQDIQTeHJVUryCNhV_fhLFC1MVPTI4Zk',
  authDomain: 'iot-turnonoff-c0a63.firebaseapp.com',
  databaseURL: 'https://iot-turnonoff-c0a63-default-rtdb.firebaseio.com',
  projectId: 'iot-turnonoff-c0a63',
  storageBucket: 'iot-turnonoff-c0a63.appspot.com',
  messagingSenderId: '438094005315',
  appId: '1:438094005315:web:55bdbc512c7e26aa4f80f6',
  measurementId: 'G-XYQZTD81M6',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
