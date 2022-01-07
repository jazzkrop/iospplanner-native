const removeRecord = (state, payload) => {
  const { id, collectionPath } = payload
  // Creating copy of the state
  const stateCopy = state

  if (!stateCopy[collectionPath]) {
    console.log('ERROR: There is no collection with this name')
  }
  if (!stateCopy[collectionPath][id]) {
    console.log('ERROR: There is no element with this id')
  }

  try {
    delete stateCopy[collectionPath][id]
  } catch (e) {
    console.log(e)
  }
  return { ...stateCopy }
}

export default removeRecord
