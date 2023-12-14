import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { EIsDone, TTodo } from '../../types/types';

interface ToDosState {
  todos: TTodo[];
}

const initialState: ToDosState = {
  todos: []
};

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push(action.payload);
    },

    deleteTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo: TTodo): boolean => {
        return todo.id !== action.payload;
      });
    },

    updateTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.map((todo: TTodo): TTodo => {
        if (todo.id === action.payload) return { ...todo, isDone: todo.isDone ? EIsDone.UN_DONE : EIsDone.DONE };
        else return todo;
      });
    }
  }
});

export const { addTodo, deleteTodo, updateTodo } = todosSlice.actions;

export default todosSlice.reducer;
