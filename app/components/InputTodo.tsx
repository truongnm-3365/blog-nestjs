"use client"
import React, { useContext, useState } from 'react'
import TodoContext from '../context/TodoContext'
import { TODO_ACTIONS } from '../types/TodoType';




const InputTodo = () => {
    const { state, dispatch } = useContext(TodoContext);

    const [title,setTitle] = useState("")
    return (
    <div>
        <input onChange={(e) => setTitle(e.target.value)}  type="text" />
        <button onClick={() => dispatch({type:TODO_ACTIONS.Create, payload:{id:4,title:title,done:false,desc:""}})}>Thêm</button>
    </div>
  )
}

export default InputTodo