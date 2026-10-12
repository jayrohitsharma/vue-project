import { initializeApp } from 'firebase/app'
import { getAnalytics, isSupported } from 'firebase/analytics'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDnbBk3r0xyvBgW8_ZTBiODMyr-S0GvCEw',
  authDomain: 'fit5032-personal-acc-3fd54.firebaseapp.com',
  projectId: 'fit5032-personal-acc-3fd54',
  storageBucket: 'fit5032-personal-acc-3fd54.firebasestorage.app',
  messagingSenderId: '615831787513',
  appId: '1:615831787513:web:7167506ec4cc8218410f28',
  measurementId: 'G-4CLD7L9Q4J',
}

const app = initializeApp(firebaseConfig)

isSupported().then((supported) => {
  if (supported) {
    getAnalytics(app)
  }
})

const db = getFirestore(app)
export default db
