"use client"
import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'




const InputTodo = () => {
    let { addTodo } = useContext(TodoContext)

    const [title,setTitle] = useState("")
    return (
    <div>
        <input onChange={(e) => setTitle(e.target.value)}  type="text" />
        <button onClick={() => addTodo({id:4,title:title,done:false,desc:""})}>Thêm</button>
    </div>
  )
}

export default InputTodo