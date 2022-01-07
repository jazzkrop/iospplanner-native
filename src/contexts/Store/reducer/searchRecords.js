const searchRecords = (state, payload) => {
  const { collectionPath, searchedRecords, searchQuery } = payload

  const stateCopy = JSON.parse(JSON.stringify(state))
  
  stateCopy.filtered[collectionPath] = {}
  stateCopy.filtered[collectionPath].result = searchedRecords
  stateCopy.filtered[collectionPath].query = searchQuery

  return { ...stateCopy }
}

export default searchRecords
