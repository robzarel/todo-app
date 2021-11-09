import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { TodoItemInterface } from '../../interfaces';
type TodosType = Array<TodoItemInterface>

const initialState = {
    todos: [] as TodosType
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        setupTodos(state, action: PayloadAction<TodosType>) {            
            state.todos = action.payload
        },
        updateTodoStatus(state, action: PayloadAction<{ id: number, completed: boolean  }>) {
            const { id, completed } = action.payload;
            const todoIndex = state.todos.findIndex((element: TodoItemInterface) => element.id === id)

            state.todos[todoIndex].completed = !completed
        }
    }
});

const { actions, reducer } = todosSlice;

export const { setupTodos, updateTodoStatus } = actions;
export default reducer;