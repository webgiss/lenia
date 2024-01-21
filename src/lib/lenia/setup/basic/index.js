import { create_space, set_space_cell } from "../../space"

const { create_filter_conv } = require("../../filter_conv")
const { create_func } = require("../../filter_func/gaussian_ring")

const create_gaussian_func = (height_min, height_max, width_min, width_max) => {
    const height = (height_max - height_min)
    const width_mid = (width_min + width_max) / 2
    const width_halflen = (width_max - width_min) / 2

    return (data) => {
        return height * Math.exp(-(((data - width_mid) / width_halflen) ** 2)) + height_min
    }
}

const create_growing_func = (min, max, fstep) => {
    const gaussian_func = create_gaussian_func(-1, 1, min, max)

    return (sums, value, x, y) => {
        let { standard } = sums
        const result = gaussian_func(standard)
        const new_value = parseFloat(value) + result * fstep
        if (new_value > 1) return 1
        if (new_value < 0) return 0
        return new_value
    }
}

const create_cell = (x, y, values) => {
    // console.log('create_cell', { x, y, values })
    const { standard } = values
    return { x, y, standard }
}

const get_value = (cell) => cell === undefined ? 0 : cell.standard
// const set_value = (cell, value) => cell.standard = value

const create_filter_convs = (size, min, max) => {
    return {
        standard: {
            filter_conv: create_filter_conv(size, create_func(min, max)),
            space_value_getter: get_value,
            // space_value_setter: set_value,
        },
    }
}

const create_growing_funcs = (min, max, fstep) => {
    return {
        standard: create_growing_func(min, max, fstep),
    }
}

const color_getter = (cell) => {
    const value = get_value(cell)
    const hex = Math.floor(value * 255).toString(16).padStart(2, '0')
    return `#${hex}0000`
}

const create_get_init_position = (size) => {
    return () => {
        const space = create_space(size)

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const standard = Math.random()
                set_space_cell(space, x, y, create_cell(x, y, { standard }))
            }
        }
        return space
    }
}

export const create_setup = (size, { filter_conv_values: { min: fc_min, max: fc_max }, growing_func_values: { min: gf_min, max: gf_max, fstep } }) => {
    const setup = {}
    setup.size = size
    setup.cell_creator_by_values = create_cell
    setup.filter_convs = create_filter_convs(1.5 * fc_max, fc_min, fc_max)
    setup.growing_funcs = create_growing_funcs(gf_min, gf_max, fstep)
    setup.color_getter = color_getter
    setup.get_init_position = create_get_init_position(size)
    return setup
}

