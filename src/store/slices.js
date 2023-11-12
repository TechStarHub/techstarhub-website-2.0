import { createSlice } from '@reduxjs/toolkit';

export const modeSlice = createSlice({
  name: 'mode',
  initialState: {
    mode: 'dark',
  },
  reducers: {
    changeMode: (state, action) => {
      state.mode = action.payload;
    },
  },
});

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    search: '',
  },
  reducers: {
    changeSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});
