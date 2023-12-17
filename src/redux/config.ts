import { configureStore } from '@reduxjs/toolkit';
import AlertSlice from './modules/AlertSlice';

const store = configureStore({
  reducer: { AlertSlice }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
