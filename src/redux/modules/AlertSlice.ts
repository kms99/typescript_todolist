import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum alertType {
  alert,
  confirm
}

const initialState = {
  isOpen: false,
  type: alertType.alert,
  title: '',
  message: '',
  result: false
};

const AlertSlice = createSlice({
  name: 'alertSlice',
  initialState,
  reducers: {
    closeAlert: (state) => {
      state.isOpen = false;
      state.result = false;
    },
    openConfirm: (state, action) => {
      state.isOpen = true;
      state.type = alertType.confirm;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
    openAlert: (state, action) => {
      state.isOpen = true;
      state.type = alertType.alert;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
    confirmTrue: (state) => {
      state.result = true;
    },
    confirmFalse: (state) => {
      state.result = false;
    }
  }
});

export default AlertSlice.reducer;
export const { closeAlert, openAlert, openConfirm, confirmTrue, confirmFalse } = AlertSlice.actions;
