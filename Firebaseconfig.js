// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBECety-K1GixtMO816zK6rhLDzZFK6GRo",
  authDomain: "fitnessmate-fd72b.firebaseapp.com",
  projectId: "fitnessmate-fd72b",
  storageBucket: "fitnessmate-fd72b.appspot.com",
  messagingSenderId: "591013940929",
  appId: "1:591013940929:web:ddd52eabc965ce3d5fce40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage) // Set persistence to AsyncStorage
});

export { auth };