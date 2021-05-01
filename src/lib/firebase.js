import Firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// import { seedDatabase } from '../seed'

const firebaseConfig = {
  apiKey: 'AIzaSyCEAfit2SPSk11j23sMlRsMuJlzY6gH-Lc',
  authDomain: 'rosy-pivot-234422.firebaseapp.com',
  databaseURL: 'https://rosy-pivot-234422.firebaseio.com',
  projectId: 'rosy-pivot-234422',
  storageBucket: 'rosy-pivot-234422.appspot.com',
  messagingSenderId: '762824706083',
  appId: '1:762824706083:web:b2c8f57ecea08158f4c996'
}

const firebase = Firebase.initializeApp(firebaseConfig)
const { FieldValue } = Firebase.firestore

// seedDatabase(firebase)

export { firebase, FieldValue }
