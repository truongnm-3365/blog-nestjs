"use client"
import React, { createContext, useState, Key, useContext, Dispatch, useReducer, useEffect } from 'react';
import { todoReducers } from '../reducer/TodoReducer';
import { TInitialTodoStateType, TTodoActions, TTodoType } from '../types/TodoType';


const data:TTodoType[] = [
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

  const initialState = {
    todos: data,
  };



//const TodoContext = createContext<ITodoContext>(DEFAULT_TODO);

const TodoContext = createContext<{
  state: TInitialTodoStateType;
  dispatch: Dispatch<TTodoActions>;
}>({
  state: initialState,
  dispatch: () => null,
});


const mainReducer = ({ todos }: TInitialTodoStateType, action: TTodoActions) => ({
  todos: todoReducers(todos, action),
});

export const TodoContextProvider: React.FC<{ children: any }> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return <TodoContext.Provider value={{ state, dispatch }}>
    {children}
  </TodoContext.Provider>;
};


export default TodoContext;


