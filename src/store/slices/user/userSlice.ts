import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  test: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
  },
});

// export const { } = userSlice.actions;
export default userSlice.reducer;
