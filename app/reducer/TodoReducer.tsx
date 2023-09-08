// Tạo reducer

import { TODO_ACTIONS, TTodoActions, TTodoType } from '../types/TodoType';

export const todoReducers = (state: TTodoType[], action: TTodoActions) => {
    switch (action.type) {

        case TODO_ACTIONS.Create:
            return [
                ...state,
                action.payload
            ];

        case TODO_ACTIONS.Delete:
            return [...state.filter((todo) => todo.id !== action.payload.id)];

        case TODO_ACTIONS.Check:
            return [...state.map(item => {
                if(item.id === action.payload.id){
                  item.done = !item.done
                }
          
                return item
              })]

        default:
            return state;
    }
};

