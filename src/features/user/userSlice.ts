import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { toast, ToastContent } from 'react-toastify'

import {
  addItemToLocalStorage,
  customFetch,
  getItemFromLocalStorage,
  removeItemFromLocalStorage,
} from '../../utils'
import { RootState } from '../store'

import {
  ErrorResponse,
  LoginUserPayload,
  LoginUserResponse,
  RegisterUserPayload,
  RegisterUserResponse,
  UpdateUserPayload,
  UpdateUserResponse,
  User,
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

export const updateUser = createAsyncThunk<
  UpdateUserResponse,
  UpdateUserPayload,
  { state: RootState }
>('user/updateUser', async ({ user }, thunkAPI) => {
  try {
    const response = await customFetch.patch('/auth/updateUser', user, {
      headers: {
        authorization: `Bearer ${thunkAPI.getState().user.user?.token}`,
      },
    })
    return response.data
  } catch (error) {
    const typedError = error as ErrorResponse
    return thunkAPI.rejectWithValue(typedError.response.data.msg)
  }
})

const initialState: State = {
  isLoading: false,
  user: getItemFromLocalStorage('user'),
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logoutUser: (state) => {
      state.user = null
      removeItemFromLocalStorage('user')
    },
  },
  extraReducers: (builder) => {
    builder.addCase(registerUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(registerUser.fulfilled, (state, action) => {
      const { user } = action.payload
      state.isLoading = false
      state.user = user
      addItemToLocalStorage('user', user)
      toast.success(`Welcome ${user.name}!`)
    })
    builder.addCase(registerUser.rejected, (state, action) => {
      state.isLoading = false
      toast.error(action.payload as ToastContent)
    })
    builder.addCase(loginUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(loginUser.fulfilled, (state, action) => {
      const { user } = action.payload
      state.isLoading = false
      state.user = user
      addItemToLocalStorage('user', user)
      toast.success(`Welcome back ${user.name}!`)
    })
    builder.addCase(loginUser.rejected, (state, action) => {
      state.isLoading = false
      toast.error(action.payload as ToastContent)
    })
    builder.addCase(updateUser.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(updateUser.fulfilled, (state, action) => {
      const { user } = action.payload
      state.isLoading = false
      state.user = user
      addItemToLocalStorage('user', user)
      toast.success(`User details are updated!`)
    })
    builder.addCase(updateUser.rejected, (state, action) => {
      state.isLoading = false
      toast.error(action.payload as ToastContent)
    })
  },
})

export const userReducer = userSlice.reducer
export const { logoutUser } = userSlice.actions
