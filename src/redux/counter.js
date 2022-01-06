import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0
  },
  reducers: {
    incremented: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.count += 1
    },
    decremented: state => {
      if (state.count > 0)
        state.count -= 1
    },
    default: state => {
      state
    }
  }
})

export const { incremented, decremented } = counterSlice.actions

export default counterSlice.reducer

// const store = configureStore({
//   reducer: counterSlice.reducer
// })

// // Can still subscribe to the store
// store.subscribe(() => console.log(store.getState()))

// // Still pass action objects to `dispatch`, but they're created for us
// store.dispatch(incremented())
// // {counter: 1}
// store.dispatch(incremented())
// // {counter: 2}
// store.dispatch(decremented())
// // {counter: 1}