import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast, ToastContent } from 'react-toastify'

import { User } from '../../types'
import {
  addUserToLocalStorage,
  customFetch,
  getUserFromLocalStorage,
} from '../../utils'

import {
  ErrorResponse,
  LoginUserPayload,
  LoginUserResponse,
  RegisterUserPayload,
  RegisterUserResponse,
} from './types'

type State = {
  isLoading: boolean
  user: User | null
}

export const registerUser = createAsyncThunk<
  RegisterUserResponse,
  RegisterUserPayload
>('user/registerUser', async (user, thunkAPI) => {
  try {
    const response = await customFetch.post('/auth/register', user)
    return response.data
  } catch (error) {
    const typedError = error as ErrorResponse
    return thunkAPI.rejectWithValue(typedError.response.data.msg)
  }
})
export const loginUser = createAsyncThunk<LoginUserResponse, LoginUserPayload>(
  'user/loginUser',
  async (user, thunkAPI) => {
    try {
      const response = await customFetch.post('/auth/login', user)
      return response.data
    } catch (error) {
      const typedError = error as ErrorResponse
      return thunkAPI.rejectWithValue(typedError.response.data.msg)
    }
  },
)

const initialState: State = {
  isLoading: false,
  user: getUserFromLocalStorage(),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
    }),
      builder.addCase(registerUser.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Welcome ${user.name}!`)
      }),
      builder.addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false
        toast.error(action.payload as ToastContent)
      }),
      builder.addCase(loginUser.pending, (state) => {
        state.isLoading = true
      }),
      builder.addCase(loginUser.fulfilled, (state, action) => {
        const { user } = action.payload
        state.isLoading = false
        state.user = user
        addUserToLocalStorage(user)
        toast.success(`Welcome back ${user.name}!`)
      }),
      builder.addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false
        toast.error(action.payload as ToastContent)
      })
  },
})

export const userReducer = userSlice.reducer
