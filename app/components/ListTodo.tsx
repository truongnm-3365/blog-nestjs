"use client"
import { useContext } from "react"
import styles from './styles.module.css'
import TodoContext, { TodoTypes } from "../context/TodoContext"



const ListTodo = () => {
    const { todos, deleteTodo, onCheckTodo} = useContext(TodoContext)
    
    return (
    <ul>
        {todos.map((item:TodoTypes) => {
            return <li key={item.id}>
                <input onChange={() => onCheckTodo(item)} type="checkbox" />
                <span className={item.done ? styles.checked : ""}>{item.title}</span>
                <button onClick={() => deleteTodo(item)} style={{marginLeft:'10px'}} >Xóa</button>
            </li>
        })}
    </ul>
  )
}

export default ListTodo