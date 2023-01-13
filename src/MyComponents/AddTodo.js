import React, { useState } from 'react'

const AddTodo = (addTodo) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();
        if(!title || !desc){
            alert("title or description can not be blank")
        }
        addTodo(title, desc);
    }

    return (
        <div className='container my-3'>
        <h4 className='text-center'>Add a Task</h4>
        <form onSubmit={submit}>
            <div className="mb-3">
                <label for="title" className="form-label">Task title</label>
                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" />
            </div>
            <div className="mb-3">
                <label for="desc" className="form-label">Description</label>
                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className     ="form-control" id="desc"/>
            </div>
            <button type="submit" className="btn btn-success">Add Task</button>
        </form>
        </div>
    )
}

export default AddTodo
