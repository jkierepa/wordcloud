import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  name: string;
  id: number;
}

export const initialState: UserState = {
  name: '',
  id: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.id = new Date().getTime();
    },
    clearUser: (state) => {
      state.id = initialState.id;
      state.name = initialState.name
    }
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
