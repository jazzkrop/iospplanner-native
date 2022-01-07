import { firestoreService } from '../../../services/firebase'

const { updateDocument } = firestoreService

const useUpdateRecord = (dispatch) => {
  const updateRecord = async ({ collectionPath, id, values }) => {
    const payload = {
      collectionPath,
      id,
      values
    }
    dispatch({ type: 'updateRecord', payload })

    await updateDocument(collectionPath, id, values)
  }

  return updateRecord
}

export default useUpdateRecord
