const updateRecord = (state, payload) => {
  const { collectionPath, id, values } = payload

  // Creating copy of the state
  const stateCopy = JSON.parse(JSON.stringify(state))

  if (!stateCopy[collectionPath]) {
    console.log('ERROR: There is no collection with this name')
  }
  if (!stateCopy[collectionPath][id]) {
    console.log('ERROR: There is no element with this id')
  }

  // updating with new values
  Object.assign(stateCopy[collectionPath][id], values)
  
  return { ...stateCopy }
}

export default updateRecord
