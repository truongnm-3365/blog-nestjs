// Tạo reducer

import { TODO_ACTIONS, TTodoActions, TTodoType } from '../types/TodoType';

export const todoReducers = (state: {todos:[],todo:null}, action: TTodoActions) => {
    
    switch (action.type) {

        case TODO_ACTIONS.Create:
            return {
                todo: state.todo,
                todos : [...state.todos,action.payload]
            }

        case TODO_ACTIONS.Get:
            return {
                todos: state.todos,
                todo : state.todos[action.payload-1]
            } 
           
                

        case TODO_ACTIONS.Delete:
           
            return {
                todo: state.todo,
                todos:[...state.todos.filter((todo: { id: number; }) => todo.id !== action.payload.id)]
            }

        case TODO_ACTIONS.Check:
            return {
                todo: state.todo,
                todos:[...state.todos.map((item: { id: number; done: boolean; }) => {
                    if(item.id === action.payload.id){
                      item.done = !item.done
                    }
              
                    return item
                  })]
            } 
            

        default:
            return state;
    }
};

