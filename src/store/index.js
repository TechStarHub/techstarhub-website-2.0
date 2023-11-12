import { configureStore } from '@reduxjs/toolkit';
import { modeSlice, searchSlice } from './slices';

const store = configureStore({
  reducer: {
    mode: modeSlice.reducer,
    search: searchSlice.reducer,
  },
});

export default store;

export const { changeMode } = modeSlice.actions;
export const { changeSearch } = searchSlice.actions;
