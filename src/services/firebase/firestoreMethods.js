import {
  collection,
  doc,
  setDoc,
  updateDoc,
  serverTimestamp,
  query,
  getDoc,
  getDocs,
  where,
  deleteDoc
} from 'firebase/firestore'
import firestore from './firestore'

const createDocument = async (collectionPath, id, documentData) => {
  const ref = doc(firestore, collectionPath, id)
  const result = await setDoc(ref, documentData)
  return result
}
const updateDocument = async (collectionPath, id, documentData) => {
  const ref = doc(firestore, collectionPath, id)
  const result = await updateDoc(ref, documentData)
  return result
}
const deleteDocument = async (collectionPath, id) => {
  const result = await deleteDoc(doc(firestore, collectionPath, id))
  return result
}
const getDocument = async (collectionPath, id) => {
  const ref = doc(firestore, collectionPath, id)
  const docSnapshot = await getDoc(ref)
  return docSnapshot.data()
}
const getId = (collectionPath) => {
  const ref = doc(collection(firestore, collectionPath))
  return ref.id
}

const queryDocuments = async (collectionPath, queries) => {
  const ref = collection(firestore, collectionPath)
  const queriesExtended = queries && queries.map((q) => where(...q))
  const q = queriesExtended ? query(ref, ...queriesExtended) : query(ref)
  const querySnapshot = await getDocs(q)
  let result = []
  querySnapshot.forEach((doc) => {
    result.push(doc.data())
  })
  return result
}

const getTimestamp = () => serverTimestamp()

const firestoreService = {
  createDocument,
  updateDocument,
  getDocument,
  queryDocuments,
  deleteDocument,
  getTimestamp,
  getId
}

export default firestoreService
