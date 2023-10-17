import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoItem({ todo }) {
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const { updateTodo, deleteTodo, toggleComplete } = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, { ...todo, todo: todoMsg })
        setIsTodoEditable(false)
    }

    const toggleChange = () => {
        toggleComplete(todo.id)
    }
    return (
        <div className='item_wrapper'>
            <div className="checkbox">
                <input
                    className='checkbox_input'
                    type="checkbox"
                    checked={todo.isCompleted}
                    onChange={toggleChange}
                />
            </div>
            <input
                className={`item_input ${todo.isCompleted ? "marked_done" : ''}`}
                type="text"
                value={todoMsg}
                onChange={(e) => { setTodoMsg(e.target.value) }}
                readOnly={!isTodoEditable || todo.isCompleted}
            />
            <button onClick={() => {
                if (todo.isCompleted) return;
                if (isTodoEditable) {
                    editTodo();
                }
                else setIsTodoEditable((prev) => !prev)
            }}
                disabled={todo.isCompleted}
            >
                {isTodoEditable ? "📁" : "✏️"}
            </button>
            <button onClick={() => {
                // if (window.confirm("Are you sure you want to delete this todo?")) {
                deleteTodo(todo.id);
                // }
            }}>❌</button>
        </div >
    )
}

export default TodoItem