"use client"
import TodoContext from "@/app/context/TodoContext"
import { TODO_ACTIONS } from "@/app/types/TodoType"
import { useContext, useEffect } from "react"

const Page = ({ params }: { params: { id: string } }) => {
    const {state, dispatch} = useContext(TodoContext)

    useEffect(() =>{
        dispatch({type:TODO_ACTIONS.Get,payload:Number(params.id)})
    },[params])

  return (
    <div>
        {state.todo?.desc}
    </div>
  )
}

export default Page