import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  test: 0,
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
  },
});

// export const { } = gameSlice.actions;
export default gameSlice.reducer;
