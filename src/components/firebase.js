import firebase from 'firebase'
// import firestore from 'firebase/firestore'

const settings = { timestampsInSnapshots: true }

const firebaseConfig = {
  apiKey: 'AIzaSyBgbCzD__3a9pIruO1SYQA5ddcOznry_GM',
  authDomain: 'react-dc-final-project.firebaseapp.com',
  databaseURL: 'https://react-dc-final-project.firebaseio.com',
  projectId: 'react-dc-final-project',
  storageBucket: 'react-dc-final-project.appspot.com',
  messagingSenderId: '947537928250',
  appId: '1:947537928250:web:f1584afbb4e795609e5503',
  measurementId: 'G-Y3EC954984'
}
firebase.initializeApp(firebaseConfig)

firebase.firestore().settings(settings)

export default firebase
