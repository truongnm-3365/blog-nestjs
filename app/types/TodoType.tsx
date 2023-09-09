

export enum TODO_ACTIONS {
    Create = 'CREATE_TODO',
    Delete = 'DELETE_TODO',
    Check = 'CHECK_TODO',
    Get = 'GET_TODO'
}

export type TTodoType = {
    id: number;
    title: string;
    done: boolean;
    desc: string;
};

export type TInitialTodoStateType = {
    todos: TTodoType[] | any;
    todo: TTodoType | any
};

export type TTodoPayload = {
    [TODO_ACTIONS.Create]: {
        id: number;
        title: string;
        done: boolean;
        desc: string;
    };

    [TODO_ACTIONS.Get]: number;
    
    [TODO_ACTIONS.Delete]: {
        id: number;
        title: string;
        done: boolean;
        desc: string;
    };
    [TODO_ACTIONS.Check]: {
        id: number;
        title: string;
        done: boolean;
        desc: string;
    };
    
};

export type TActionMap<M extends { [index: string]: any }> = {
    [Key in keyof M]: M[Key] extends undefined
        ? {
              type: Key;
          }
        : {
              type: Key;
              payload: M[Key];
          };
};

export type TTodoActions = TActionMap<TTodoPayload>[keyof TActionMap<TTodoPayload>];

