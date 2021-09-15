import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  test: 0,
};

export const highscoreSlice = createSlice({
  name: 'highscore',
  initialState,
  reducers: {
  },
});

// export const { } = highscoreSlice.actions;
export default highscoreSlice.reducer;
