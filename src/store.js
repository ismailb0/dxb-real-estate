import { configureStore } from '@reduxjs/toolkit';
import areaReducer from './AreaOverlay/areaSlice';

export const store = configureStore({
  reducer: {
    area: areaReducer,
  },
});
