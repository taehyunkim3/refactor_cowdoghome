import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    token: null,
    status: 'idle',
    error: null
  },
  reducers: {
    loginStart: (state) => {
      state.status = 'loading'
    },
    loginSuccess: (state, action) => {
      state.status = 'succeeded'
      state.token = action.payload.token
    },
    loginFailed: (state, action) => {
      state.status = 'failed'
      state.error = action.payload
    },
  }
})

console.log(authSlice.actions)

export const { loginStart, loginSuccess, loginFailed } = authSlice.actions

export default authSlice.reducer
