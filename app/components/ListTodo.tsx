"use client"
import { useContext } from "react"


import styles from './styles.module.css'
import TodoContext from "../context/TodoContext"
import { TODO_ACTIONS, TTodoType } from "../types/TodoType"
import { useRouter } from "next/navigation"


const ListTodo = () => {
    const { state, dispatch } = useContext(TodoContext);
    const router = useRouter();
    
    return (
    <ul>
        {state.todos?.map((item:TTodoType) => {
            return <li key={item.id}>
                <input onChange={() => dispatch({type:TODO_ACTIONS.Check,payload:item})} type="checkbox" />
                <span className={item.done ? styles.checked : ""}>{item.title}</span>
                <button onClick={() => dispatch({type:TODO_ACTIONS.Delete,payload:item})} style={{marginLeft:'10px'}} >Xóa</button>
                <button onClick={() => router.push(`/todo/${item.id}`)} style={{marginLeft:'10px'}} >Chi tiết</button>
            </li>
        })}
    </ul>
  )
}

export default ListTodo

