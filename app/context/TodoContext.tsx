"use client"
import React, { createContext, useState, Key, useContext } from 'react';

export type TodoTypes = {
    id:Key,
    title:String,
    done:Boolean,
    desc:String
}


export type FunctionTodoType = {
    (todo: TodoTypes) : void
}


export interface ITodoContext {
    todos: TodoTypes[],
    addTodo:  FunctionTodoType,
    deleteTodo: FunctionTodoType,
    onCheckTodo: FunctionTodoType
}

const data:TodoTypes[] = [
    {
      id:1,
      title:"Ăn cơm",
      done:false,
      desc:"Hôm nay cơm ngon lắm"
    },
    {
      id:2,
      title:"Uống nước",
      done:false,
      desc:"Uống nước nhớ nguồn"
    },
    {
      id:3,
      title:"Chơi điển tử",
      done:false,
      desc:"Liên minh huyền thoại"
    },
  ]

const DEFAULT_TODO: ITodoContext = {
    todos: data,
    addTodo: () => {},
    deleteTodo: () => {},
    onCheckTodo: () => {}
};

const TodoContext = createContext<ITodoContext>(DEFAULT_TODO);

export const TodoContextProvider: React.FC<{ children: any }> = ({ children }) => {
    const [todos, setTodos] = useState<TodoTypes[]>(data);

    const addTodo = (todo:TodoTypes) => {
        setTodos([...todos,todo])
       
    }
    
      function deleteTodo(todo:TodoTypes){
        const newTodos = todos.filter(item => item.id !== todo.id)
        setTodos(newTodos)
      }
    
      function onCheckTodo(todo:TodoTypes) {
        const newTodos = todos.map(item => {
          if(item.id === todo.id){
            item.done = !item.done
          }
    
          return item
        })
        setTodos(newTodos)
      }
    

    const values: ITodoContext = React.useMemo(
        () => ({
            todos,
            addTodo,
            deleteTodo,
            onCheckTodo
            
        }),
        [todos,addTodo,deleteTodo,onCheckTodo],
    );

    return <TodoContext.Provider value={values}>{children}</TodoContext.Provider>;
};

export default TodoContext;

