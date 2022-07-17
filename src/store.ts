import { configureStore } from '@reduxjs/toolkit'

import { uiReducer, userReducer } from './features'

export const store = configureStore({
  reducer: {
    ui: uiReducer,
    user: userReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
