import React from 'react'
import TodoItem from './TodoItem'

export default function Todos(props) {
    return (
        <div className='container'>
            <h3 className='text-center'>Task</h3>
            {props.todos.length === 0 ? <p className='text-center'>No Task</p>:
                props.todos.map((todo) => {
                     return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            })}


        </div>
    )
}
