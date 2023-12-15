import { configureStore } from '@reduxjs/toolkit';
import toDoSlice from './modules/todosSlices';
const store = configureStore({
  reducer: { toDoSlice }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
