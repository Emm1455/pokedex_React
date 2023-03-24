import { configureStore } from '@reduxjs/toolkit'
import favoritesReducer from '../features/pokemon/favoritesSlice'

export default configureStore({
  reducer: {
    favorites: favoritesReducer
  }
})
