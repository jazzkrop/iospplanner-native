const createRecord = (state, payload) => {
  const { collectionPath, id, values } = payload

  // Creating copy of the state
  const stateCopy = JSON.parse(JSON.stringify(state))

  stateCopy[collectionPath][id] = values

  return { ...stateCopy }
}

export default createRecord
