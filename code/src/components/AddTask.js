import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import tasks from 'reducers/tasks'

const AddTask = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const onAddTask = () => {
        setInput('')
        dispatch(tasks.actions.addTask(input))
    }

    const handleNewTask = (event) => {
        setInput(event.target.value)
    }

    return(
        <div className='input-wrapper'>
            <label className='input-label'>
                <input className='task-input'
                id="task"
                type="text"
                value={input}
                onChange={handleNewTask}
                />
                <button className='add-button' onClick={onAddTask} disabled={input.length < 1}>
                    <span>Add task</span>
                </button>
            </label>
        </div>
    )
}

export default AddTask