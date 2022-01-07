import { firestoreService } from '../../../services/firebase'

const { getId, createDocument } = firestoreService

const useAddRecord = (store, dispatch) => {
  const addRecord = async ({ collectionPath, id, values }) => {
    values = values || {}
    const recordId = id || getId(collectionPath)
    values.id = recordId

    if (collectionPath === 'tasks') {
      if (Object.keys(store.categories).length === 0) return

      values.parentId = store.categories[values?.parentId]
        ? values.parentId
        : Object.keys(store.categories)[0]
      values.flagged = values.flagged || false
      values.createdAt = Date.now()
      values.updatedAt = Date.now()
      values.done = values.done || false
    }
    if (collectionPath === 'categories') {
      values.name = values.name || 'New title'
      values.color = values.color || 'var(--blue)'
      values.children = []
    }

    const payload = {
      collectionPath,
      id: recordId,
      values
    }

    dispatch({ type: 'createRecord', payload })
    
    await createDocument(collectionPath, recordId, values)
  }

  return addRecord
}

export default useAddRecord
