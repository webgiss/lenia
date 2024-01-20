import { createSlice } from '@reduxjs/toolkit'

import { incrementAsync } from './thunks'

const initialState = {
    value: 0,
    amount: 10,
    status: 'idle',
}

export const slice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => { state.value += 1 },
        decrement: (state) => { state.value -= 1 },
        incrementByAmount: (state, action) => { state.value += action.payload },
        setIncrementAmount: (state, action) => { state.amount = action.payload },
    },
    extraReducers: (builder) => {
        builder
            .addCase(incrementAsync.pending, (state) => { state.status = 'loading' })
            .addCase(incrementAsync.fulfilled, (state, action) => {
                state.status = 'idle'
                state.value += action.payload
            })
    },
})
