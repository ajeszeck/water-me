import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBBbQsVsNJGMKOTmDMqfOpFHaeW4zp55d0",
  authDomain: "water-me-b39ea.firebaseapp.com",
  databaseURL: "https://water-me-b39ea.firebaseio.com"
});

const base = Rebase.createClass(
  firebaseApp.database()
);

export { firebaseApp };
export default base;
