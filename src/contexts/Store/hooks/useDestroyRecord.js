import { firestoreService } from '../../../services/firebase'

const { deleteDocument } = firestoreService

const useDestroyRecord = (store, dispatch) => {
  const destroyRecord = async ({ collectionPath, id }) => {
    if (collectionPath === 'categories') {
      const tasksArray = Object.values(store.tasks)
      tasksArray.forEach(async (task) => {
        if (task.parentId === id) {
          await deleteDocument('tasks', task.id)
          const taskPayload = { collectionPath: 'tasks', id: task.id }
          dispatch({ type: 'deleteRecord', payload: taskPayload })
        }
      })
    }

    const payload = { collectionPath, id }
    dispatch({ type: 'deleteRecord', payload })

    await deleteDocument('categories', id)
  }
  return destroyRecord
}

export default useDestroyRecord
