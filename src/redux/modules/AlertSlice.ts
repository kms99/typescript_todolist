import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AlertType } from '../../types/enum';

interface AlertPayloadType {
  message: string;
  title: string;
}

const initialState = {
  isOpen: false,
  type: AlertType.alert,
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
    openConfirm: (state, action: PayloadAction<AlertPayloadType>) => {
      state.isOpen = true;
      state.type = AlertType.confirm;
      state.title = action.payload.title;
      state.message = action.payload.message;
    },
    openAlert: (state, action: PayloadAction<AlertPayloadType>) => {
      state.isOpen = true;
      state.type = AlertType.alert;
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
