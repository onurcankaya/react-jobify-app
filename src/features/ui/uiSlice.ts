import { createSlice } from '@reduxjs/toolkit'

import { UI } from '../../types'
import { addItemToLocalStorage, getItemFromLocalStorage } from '../../utils'

const initialState: UI = {
  isSidebarOpen: getItemFromLocalStorage('ui')?.isSidebarOpen,
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen
      addItemToLocalStorage('ui', state)
    },
  },
})

export const uiReducer = uiSlice.reducer
export const { toggleSidebar } = uiSlice.actions
