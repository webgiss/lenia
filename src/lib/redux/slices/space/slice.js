import { createSlice } from '@reduxjs/toolkit'
import { current } from '@reduxjs/toolkit'

import { create_space, get_new_space } from '@/lib/lenia'

const initialState = {
    iteration: 0,
    space: null,
    auto_download: false,
    prefix: "lenia",
}

export const slice = createSlice({
    name: 'space',
    initialState,
    reducers: {
        init: (state) => { 
            const space = create_space()
            state.space = space
            state.iteration = 0
            state.id = `${new Date().getTime()}`
        },
        step: (state) => {
            const space = current(state.space)
            state.space = get_new_space(space)
            state.iteration += 1
        },
        steps: (state) => {
            let space = current(state.space)
            space = get_new_space(space)
            space = get_new_space(space)
            space = get_new_space(space)
            space = get_new_space(space)
            space = get_new_space(space)
            space = get_new_space(space)
            space = get_new_space(space)
            space = get_new_space(space)
            space = get_new_space(space)
            space = get_new_space(space)
            state.space = space
            state.iteration += 10
        },
        set_auto_download: (state, action) => {
            state.auto_download = action.payload
        },
        change_prefix: (state, action) => {
            state.prefix = action.payload
        },
    },
})
