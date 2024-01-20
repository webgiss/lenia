import { createAsyncThunk } from '@reduxjs/toolkit'
import { fetchIdentityCount } from './fetchIdentityCount'
import { selectCount } from './selectors'
import { slice } from './slice'

export const incrementAsync = createAsyncThunk(
    'counter/fetchIdentityCount',
    async (amount) => {
        const response = await fetchIdentityCount(amount)

        return response.data
    }
)

export const incrementIfOddAsync = (amount) =>
    (dispatch, getState) => {
        const currentValue = selectCount(getState())

        if (currentValue % 2 === 1) {
            dispatch(slice.actions.incrementByAmount(amount))
        }
    }
