import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  headerConfig: {
    isFixed: false,
    topAlpha: false
  }
};

const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    changeHeaderConfigAction(state, { payload }) {
      state.headerConfig = payload;
    }
  }
});

export const { changeHeaderConfigAction } = mainSlice.actions;
export default mainSlice.reducer;
