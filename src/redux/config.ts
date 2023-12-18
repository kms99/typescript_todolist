import { configureStore } from '@reduxjs/toolkit';
import AlertSlice from './modules/AlertSlice';
import LoadingSlice from './modules/LoadingSlice';

const store = configureStore({
  reducer: { AlertSlice, LoadingSlice }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
