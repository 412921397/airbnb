import { createSlice } from '@reduxjs/toolkit';

import { IInitialState } from './types';

const initialState: IInitialState = {
  name: 'home'
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {}
});

export default homeSlice.reducer;
