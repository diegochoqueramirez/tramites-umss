import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    password: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.user.isLoggedIn = action.payload;
    },
  },
});

export const { setUser, setLoggedIn } = userSlice.actions;

export default userSlice.reducer;
