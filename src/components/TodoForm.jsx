import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoForm() {

    const [todo, setTodo] = useState('')
    const { addTodo } = useTodo()

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!todo) return;

        addTodo({ todo, isCompleted: false })
        setTodo("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                className='form_input'
                type="text"
                placeholder="Write Todo..."
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type='submit'>➕</button>
        </form>
    )
}

export default TodoForm