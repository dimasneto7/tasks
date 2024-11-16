import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyClLe5saelTUDUImLAHWnL9hnGQDZQHis0',
  authDomain: 'tasks-f619c.firebaseapp.com',
  projectId: 'tasks-f619c',
  storageBucket: 'tasks-f619c.firebasestorage.app',
  messagingSenderId: '436432615378',
  appId: '1:436432615378:web:05f53af4d830399b9e3a0b',
}

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)

export { db }
