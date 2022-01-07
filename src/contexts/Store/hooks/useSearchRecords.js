const useSearchRecords = (store, dispatch) => {
  const searchRecords = ({ collectionPath, query }) => {
    if (query.length === 0) {
      console.log('Invalid query')
      return
    }
    const queryExtended = query?.split(' ')
    const arrayValues = Object.values(store[collectionPath])

    // TODO: rename this function
    const isLookingFor = (item) => {
      for (let i = 0; i < queryExtended.length; i++) {
        const queryWord = queryExtended[i]
        if (!item.name.toLowerCase().includes(queryWord.toLowerCase())) {
          return false
        }
      }
      return true
    }
    const result = arrayValues.filter(isLookingFor)
    const payload = {
      collectionPath,
      searchedRecords: result,
      searchQuery: query
    }
    dispatch({ type: 'searchRecords', payload })
  }
  return searchRecords
}
export default useSearchRecords
