import { configureStore } from '@reduxjs/toolkit'

import restaurantsReducer from './reducers/restaurants'

export const store = configureStore({
  reducer: {
    restaurants: restaurantsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
