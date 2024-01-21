const { create_space, apply_filter_conv_on_space } = require("../space")

export const apply_setup = (setup, old_space) => {
    const { size } = setup
    const new_space = create_space(size)
    const { growing_funcs, filter_convs, cell_creator_by_values, } = setup
    apply_filter_conv_on_space(old_space, new_space, cell_creator_by_values, growing_funcs, filter_convs)
    return new_space
}
