import { configureStore } from '@reduxjs/toolkit'

import { reducer } from './rootReducer'
import { middleware } from './middleware'
import { debug } from './debug'

export const reduxStore = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(middleware)
  },
})

reduxStore.subscribe(()=> {
  const state = reduxStore.getState()
  debug({state})
})

const getState = reduxStore.getState
const dispatch = reduxStore.dispatch
debug({getState, dispatch})
