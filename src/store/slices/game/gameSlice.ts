import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';

import fetchRandomWordSet from '@api/fetchRandomWordSet';
import fetchSets from '@api/fetchSets';
import fetchWordSet from '@api/fetchWordSet';

import { RootState } from '@store/store';
import { WordSet } from '@appTypes/appTypes';

export const fetchGameSets = createAsyncThunk('game/fetchGameSets', async () => fetchSets())
export const fetchSpecifiedWordSet = createAsyncThunk('game/fetchWordSet', async (set: string) => fetchWordSet(set))
export const fetchRandomSet = createAsyncThunk('game/fetchRandomSet', async (_, { getState }) => {
  const state = getState() as RootState
  return fetchRandomWordSet(state.game.availableGameSets)
})

export type GameState = {
  availableGameSets: string[];
  wordSet: WordSet | undefined;
  correctWords: string[];
}

export const initialState: GameState = {
  availableGameSets: [],
  wordSet: undefined,
  correctWords: [],
};

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGameSets.fulfilled, (state, action: PayloadAction<string[]>) => {
      state.availableGameSets = action.payload
    });
    builder.addCase(fetchSpecifiedWordSet.fulfilled, (state, action: PayloadAction<WordSet>) => {
      if (action.payload){
        state.wordSet = action.payload
        state.correctWords = action.payload.good_words
      }
    });
    builder.addCase(fetchRandomSet.fulfilled, (state, action: PayloadAction<WordSet>) => {
      if (action.payload){
        console.log(action.payload)
        state.wordSet = action.payload
        state.correctWords = action.payload.good_words
      }
    })
  }
});

// export const {} = gameSlice.actions;
export default gameSlice.reducer;
