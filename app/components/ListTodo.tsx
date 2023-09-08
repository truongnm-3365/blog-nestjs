"use client"
import { Dispatch, useContext, useEffect } from "react"

import styles from './styles.module.css'
import TodoContext from "../context/TodoContext"
import { TInitialTodoStateType, TODO_ACTIONS, TTodoActions, TTodoType } from "../types/TodoType"



const ListTodo = () => {
    const { state, dispatch } = useContext(TodoContext);

    return (
    <ul>
        {state?.todos.map((item:TTodoType) => {
            return <li key={item.id}>
                <input onChange={() => dispatch({type:TODO_ACTIONS.Check,payload:item})} type="checkbox" />
                <span className={item.done ? styles.checked : ""}>{item.title}</span>
                <button onClick={() => dispatch({type:TODO_ACTIONS.Delete,payload:item})} style={{marginLeft:'10px'}} >Xóa</button>
            </li>
        })}
    </ul>
  )
}

export default ListTodo

