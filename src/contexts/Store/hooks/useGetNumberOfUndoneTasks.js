const useGetNumberOfUbdoneTasks = (store) => {
  const getNumberOfUndoneTasks = (id) => {
    const tasksArray = Object.values(store?.tasks)
    let numberOfUndoneTasks = 0
    tasksArray.forEach((task) => {
      if (
        id &&
        !task.done &&
        (task.parentId === id ||
          (id === 'flagged' && task.flagged) ||
          (id === 'today' && task.scheduled === Date.now()) ||
          id === 'all' ||
          (id === 'scheduled' && task.scheduled))
      ) {
        numberOfUndoneTasks += 1
      }
    })
    return numberOfUndoneTasks
  }
  return getNumberOfUndoneTasks
}
export default useGetNumberOfUbdoneTasks
