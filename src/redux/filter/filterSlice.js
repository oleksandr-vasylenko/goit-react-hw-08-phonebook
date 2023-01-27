import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,

  reducers: {
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const getFilter = state => state.filter;
