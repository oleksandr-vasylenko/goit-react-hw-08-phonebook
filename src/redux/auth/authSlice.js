import { createSlice } from '@reduxjs/toolkit';
import { signup, logIn, logOut, refreshUser } from './authApi';

const authInitialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  error: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [signup.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [signup.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logIn.fulfilled]: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [logIn.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [logIn.pending]: (state, action) => {
      state.isLoading = true;
    },
    [logOut.fulfilled]: (state, action) => {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.error = null;
      state.isLoading = false;
    },
    [logOut.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [logOut.pending]: (state, action) => {
      state.isLoading = true;
    },
    [refreshUser.fulfilled]: (state, action) => {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.error = null;
      state.isLoading = false;
    },
    [refreshUser.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.error = action.payload;
      state.isLoading = false;
    },
    [refreshUser.pending]: (state, action) => {
      state.isLoading = true;
    },
  },
});

export const authReducer = authSlice.reducer;
