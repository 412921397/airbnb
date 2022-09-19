import { createSlice } from '@reduxjs/toolkit';

import { IInitialState } from './types';

const initialState: IInitialState = {
  name: 'entire'
};

const entireSlice = createSlice({
  name: 'entire',
  initialState,
  reducers: {}
});

export default entireSlice.reducer;
