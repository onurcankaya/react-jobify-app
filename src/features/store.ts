import { configureStore } from '@reduxjs/toolkit'

import { uiReducer, userReducer } from '.'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
