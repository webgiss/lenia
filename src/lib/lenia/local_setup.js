import { create_setup } from "./setup/multi"

export const setup = create_setup(60, {
    filter_conv_values: {
        min: 4,
        max: 8,
    },
    growing_func_values: {
        min: 0.25,
        max: 0.45,
        fstep: 0.1,
    },
})
