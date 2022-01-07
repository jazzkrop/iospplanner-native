const updateCollection = (state, payload) => {
  const { collectionPath, values } = payload

  const stateCopy = JSON.parse(JSON.stringify(state))

  values.forEach((value) => {
    stateCopy[collectionPath][value.id] = value
  })

  return { ...stateCopy }
}
export default updateCollection
