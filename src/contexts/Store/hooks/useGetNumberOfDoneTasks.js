const useGetNumberOfDoneTasks = (store) => {
  const getNumberOfDoneTasks = (id) => {
    const tasksArray = Object.values(store?.tasks)
    let numberOfDoneTasks = 0
    tasksArray.forEach((task) => {
      if (
        task?.done &&
        (task?.parentId === id ||
          (id === 'flagged' && task?.flagged) ||
          (id === 'today' && task?.scheduled))
      ) {
        numberOfDoneTasks += 1
      }
    })
    return numberOfDoneTasks
  }
  return getNumberOfDoneTasks
}
export default useGetNumberOfDoneTasks
