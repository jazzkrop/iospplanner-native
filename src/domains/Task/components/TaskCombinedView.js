import { useState } from 'react'
import { MdClose, MdFlag, MdOutlinedFlag } from 'react-icons/md'
import {
  Row,
  Col,
  Text,
  Input,
  Divider,
  Checkbox,
  Button
} from '../../../components'
import { useStore } from '../../../contexts/Store'

const TaskCombinedView = ({
  task,
  accentColor,
  createMode,
  setShowTaskForm,
  parentId
}) => {
  const { destroyRecord, updateRecord, addRecord } = useStore()
  const [onEdit, setOnEdit] = useState(createMode || false)
  const [taskName, setTaskName] = useState(task?.name || '')
  const [taskDone, setTaskDone] = useState(task?.done || false)
  const [taskNotes, setTaskNotes] = useState(task?.notes || '')
  const [taskFlagged, setTaskFlagged] = useState(task?.flagged || false)
  const [taskDate, setTaskDate] = useState(task?.scheduled || '')

  const valuesChanged = () => {
    if (
      taskName !== task.name ||
      taskNotes !== task.notes ||
      taskFlagged !== task.flagged ||
      taskDate !== task.scheduled ||
      taskDone !== task.done
    )
      return true
    else return false
  }
  const valuesNotEmpty = () => {
    if (taskName.length > 0) {
      return true
    }
  }
  const deleteTask = () => {
    destroyRecord({ collectionPath: 'tasks', id: task?.id })
  }

  const changeEditMode = () => {
    setTaskName(taskName)
    setTaskNotes(taskNotes)
    setTaskFlagged(taskFlagged)
    setTaskDate(taskDate)
    setTaskDone(taskDone)
    setOnEdit(!onEdit)
  }
  const changeTaskFlagged = () => {
    if (createMode) {
      setTaskFlagged(!taskFlagged)
    } else {
      setTaskFlagged(!taskFlagged)
      updateRecord({
        collectionPath: 'tasks',
        id: task.id,
        values: { flagged: !taskFlagged }
      })
    }
  }
  const changeTaskDone = (event) => {
    if (createMode) {
      setTaskDone(event.target.checked)
    } else {
      setTaskDone(event.target.checked)
      updateRecord({
        collectionPath: 'tasks',
        id: task.id,
        values: { done: event.target.checked }
      })
    }
  }
  const handleBlur = (event) => {
    // check if this is not shild of form
    if (!event.currentTarget.contains(event.relatedTarget)) {
      const values = {
        name: taskName,
        notes: taskNotes,
        flagged: taskFlagged,
        scheduled: taskDate,
        done: taskDone,
        parentId: parentId
      }
      if (createMode) {
        if (valuesNotEmpty()) {
          addRecord({
            collectionPath: 'tasks',
            values
          })
        }

        setShowTaskForm(false)
      } else if (onEdit) {
        if (valuesChanged()) {
          updateRecord({ collectionPath: 'tasks', id: task.id, values })
        }
        changeEditMode()
      }
    }
  }
  const handleEnter = (event) => {
    if (event.keyCode === 13) {
      const values = {
        name: taskName,
        notes: taskNotes,
        flagged: taskFlagged,
        scheduled: taskDate,
        done: taskDone,
        parentId: parentId
      }
      if (createMode) {
        addRecord({
          collectionPath: 'tasks',
          values
        })
        setTaskName('')
        setTaskNotes('')
        setTaskFlagged(false)
        setTaskDate('')
        setTaskDone(false)
      } else {
        if (valuesChanged()) {
          updateRecord({ collectionPath: 'tasks', id: task.id, values })
        }
        changeEditMode()
      }
    }
  }
  return (
    <>
      <Row
        mb={10}
        mt={10}
        tabIndex={10}
        alignItems="center"
        onBlur={handleBlur}
      >
        <Col cw="auto" alignSelf="start">
          <Checkbox
            checked={taskDone}
            color={accentColor}
            onChange={changeTaskDone}
          />
        </Col>
        <Col overflow="hidden">
          {onEdit && (
            <>
              <Row mb={4} negativeMargin>
                <Col cw={12}>
                  <Input
                    type="transperent"
                    thin
                    autoFocus
                    onKeyDown={handleEnter}
                    value={taskName}
                    onChange={(event) => setTaskName(event.target.value)}
                  />
                </Col>
              </Row>
              <Row mb={4} negativeMargin>
                <Col cw={12}>
                  <Input
                    placeholder="Notes"
                    type="transperent"
                    thin
                    size="sm"
                    color="disabled"
                    value={taskNotes}
                    onKeyDown={handleEnter}
                    onChange={(event) => setTaskNotes(event.target.value)}
                  />
                </Col>
              </Row>
              <Row negativeMargin>
                <Col cw="auto">
                  <Button isHover thin>
                    Add date
                  </Button>
                </Col>
                <Col cw="auto">
                  <Button isHover thin>
                    Add location
                  </Button>
                </Col>
                <Col cw="auto">
                  <Button
                    isHover
                    icon={<MdOutlinedFlag />}
                    size="sm"
                    onClick={changeTaskFlagged}
                    color={taskFlagged ? 'var(--orange)' : null}
                  />
                </Col>
              </Row>
            </>
          )}
          {!onEdit && (
            <>
              <Row negativeMargin>
                <Col cw={12}>
                  <Text isElipsis onClick={changeEditMode}>
                    {taskName}
                  </Text>
                </Col>
              </Row>
              {task?.notes && (
                <Row negativeMargin>
                  <Col>
                    <Text onClick={changeEditMode} disabled>
                      {taskNotes}
                    </Text>
                  </Col>
                </Row>
              )}
            </>
          )}
        </Col>

        {task?.flagged && (
          <Col cw="auto">
            <Button
              icon={<MdFlag />}
              color="var(--orange)"
              size="sm"
              onClick={changeTaskFlagged}
            />
          </Col>
        )}
        {!createMode && (
          <Col cw="auto">
            <Button
              isHover
              size="sm"
              icon={<MdClose />}
              color="var(--dark-lighten-3)"
              hoverColor="var(--dark-lighten-8)"
              onClick={deleteTask}
            />
          </Col>
        )}
      </Row>
      <Row negativeMargin>
        <Col pl={60}>
          <Divider negativeRight />
        </Col>
      </Row>
    </>
  )
}
export default TaskCombinedView
