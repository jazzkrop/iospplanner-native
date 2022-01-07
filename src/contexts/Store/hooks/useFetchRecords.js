import { firestoreService } from '../../../services/firebase'

const { queryDocuments } = firestoreService

const useFetchRecords = (dispatch) => {
  const fetchRecords = async () => {
    const tasks = await queryDocuments('tasks')
    const categories = await queryDocuments('categories')

    const tasksPayload = { collectionPath: 'tasks', values: tasks }
    const categoriesPayload = {
      collectionPath: 'categories',
      values: categories
    }

    dispatch({ type: 'updateCollection', payload: tasksPayload })
    dispatch({ type: 'updateCollection', payload: categoriesPayload })
  }
  return fetchRecords
}
export default useFetchRecords
