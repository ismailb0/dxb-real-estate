import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';
import AREAS from '../Constants/Areas'

const initialState = {
  areas: Object.keys(AREAS)
}

export const areaSlice = createSlice({
  name: 'area',
  initialState,
  reducers: {
    addSelectedArea: (state, action) => state.areas.push[action.area],
    removeUnselectedArea: (state, action) => {
      _.remove(
        state.areas,
        function(n) {return n === action.area}
      )
    }
  },
})

export const selectAreas = (state) => state.area.areas
export const { addSelectedArea, removeUnselectedArea } = areaSlice.actions;
export default areaSlice.reducer;
