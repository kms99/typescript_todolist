import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  isLoading: false
};

const LoadingSlice = createSlice({
  name: 'LoadingSlice',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    }
  }
});

export default LoadingSlice.reducer;
export const { setLoading } = LoadingSlice.actions;
