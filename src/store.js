import { configureStore } from '@reduxjs/toolkit';
import areaReducer from './areaSlice';

export const store = configureStore({
  reducer: {
    area: areaReducer,
  },
});
