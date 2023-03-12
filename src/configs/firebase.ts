// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

/*อย่าลืมแก้ไขเป็นของตัวเอง*/ 
const firebaseConfig = {
  apiKey: "AIzaSyANOwCe0aSFlZlK8Pq24E-ov8LqdpQahlk",
  authDomain: "oh-advanced-redux-app.firebaseapp.com",
  projectId: "oh-advanced-redux-app",
  storageBucket: "oh-advanced-redux-app.appspot.com",
  messagingSenderId: "256609014640",
  appId: "1:256609014640:web:4183e1da780fb7c539b5b5",
  measurementId: "G-7KMLJ5HR1N"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);