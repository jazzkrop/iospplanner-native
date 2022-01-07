import { Row, Col, Title } from '../../../components'
import { TaskCombinedView } from '.'
import useStore from '../../../contexts/Store/hooks/useStore'

const TaskList = ({
  categoryId,
  showDoneTasks = true,
  showTaskForm,
  setShowTaskForm = () => {},
  showFiltered
}) => {
  const { store, getNumberOfDoneTasks } = useStore()

  const tasksArray = Object.values(store?.tasks) || []
  const getTaskResult = () => {
    if (showFiltered) {
      return store.filtered?.tasks?.result?.filter(
        (task) => task?.parentId === categoryId
      )
    } else {
      return tasksArray.filter(
        (task) =>
          task?.parentId === categoryId ||
          (categoryId === 'flagged' && task?.flagged)
      )
    }
  }
  const tasksResult = getTaskResult()
  const accentColor =
    categoryId === 'flagged'
      ? 'var(--orange)'
      : categoryId === 'today'
      ? 'var(--blue)'
      : store.categories[categoryId]?.color || 'var(--blue)'
  const allTasksDone =
    tasksResult.length > 0 &&
    tasksResult.length === getNumberOfDoneTasks(categoryId)
  const noTasks = tasksResult.length === 0
  return (
    <Row overflow="hidden" negativeMargin>
      <Col cw={12} overflow="hidden">
        {tasksResult.length > 0 &&
          tasksResult.map((task) => {
            if ((task?.done && showDoneTasks) || !task?.done) {
              return (
                <TaskCombinedView
                  parentId={categoryId}
                  key={task?.id}
                  task={task}
                  accentColor={accentColor}
                />
              )
            }
          })}
        {showTaskForm && (
          <TaskCombinedView
            accentColor={accentColor}
            createMode
            setShowTaskForm={setShowTaskForm}
            parentId={categoryId}
          />
        )}
        {noTasks && !showTaskForm && (
          <Row height="100%" alignItems="center" justifyContent="center">
            <Col cw="auto">
              <Title variant="h2">There is no reminders...</Title>
            </Col>
          </Row>
        )}
        {allTasksDone && !showTaskForm && (
          <Row height="100%" alignItems="center" justifyContent="center">
            <Col cw="auto">
              <Title variant="h2">All tasks done!</Title>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  )
}
export default TaskList
