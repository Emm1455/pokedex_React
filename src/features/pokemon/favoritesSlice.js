import { createSlice } from '@reduxjs/toolkit';

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    value: []
  },
  reducers: {
    setFavorite: (state, action) => {
      state.value = [...state.value, action.payload];
    },
    dropFavorite: (state, action) => {
      state.value = state.value.filter(item => item.id !== action.payload.id);
    }
  }
});

// Action creators are generated for each case reducer function
export const { setFavorite, dropFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
