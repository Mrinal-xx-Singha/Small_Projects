// store/favoritesSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const productId = action.payload;
      const exists = state.favorites.includes(productId);
      if (exists) {
        state.favorites = state.favorites.filter(id => id !== productId);
      } else {
        state.favorites.push(productId);
      }
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;

export default favoritesSlice.reducer;
