import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ScoreState = {
  score: number | undefined;
}

export const initialState: ScoreState = {
  score: undefined
};

export const scoreSlice = createSlice({
  name: 'score',
  initialState,
  reducers: {
    setScore: (state, action: PayloadAction<number>) => {
      state.score = action.payload
    }
  },
});

export const { setScore } = scoreSlice.actions;
export default scoreSlice.reducer;
