import { PayloadAction, createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { TTodo } from '../../types/types';
import { IUpdateArg, addTodoHandle, deleteTodoHandle, getTodoHandle, updateTodoHandle } from '../../axios/todos';
export interface AddArg {
  newTodo: TTodo;
}

export const __getTodos = createAsyncThunk('getTodos', async (payload): Promise<TTodo[]> => {
  const data = await getTodoHandle();
  return data;
});

export const __addTodos = createAsyncThunk('addTodos', async ({ newTodo }: AddArg) => {
  await addTodoHandle(newTodo);
  const data = await getTodoHandle();
  return data;
});

export const __deleteTodos = createAsyncThunk('deleteTodos', async (payload: number): Promise<TTodo[]> => {
  await deleteTodoHandle(payload);
  const data = await getTodoHandle();
  return data;
});

export const __updateTodos = createAsyncThunk('updateTodos', async (payload: IUpdateArg): Promise<TTodo[]> => {
  await updateTodoHandle(payload);
  const data = await getTodoHandle();
  return data;
});

interface ToDosState {
  todos: TTodo[];
}

const initialState: ToDosState = {
  todos: []
};

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {},
  extraReducers: (bulilder) => {
    bulilder.addCase(__getTodos.pending, (state, action) => {});
    bulilder.addCase(__getTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    bulilder.addCase(__getTodos.rejected, (state, action) => {});
    bulilder.addCase(__addTodos.pending, (state, action) => {});
    bulilder.addCase(__addTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    bulilder.addCase(__addTodos.rejected, (state, action) => {});
    bulilder.addCase(__deleteTodos.pending, (state, action) => {});
    bulilder.addCase(__deleteTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    bulilder.addCase(__deleteTodos.rejected, (state, action) => {});
    bulilder.addCase(__updateTodos.pending, (state, action) => {});
    bulilder.addCase(__updateTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    bulilder.addCase(__updateTodos.rejected, (state, action) => {});
  }
});

export const {} = todosSlice.actions;

export default todosSlice.reducer;
