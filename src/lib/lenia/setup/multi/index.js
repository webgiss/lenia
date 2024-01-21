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

const create_growing_func = (min, max, fstep, propname) => {
    const gaussian_func = create_gaussian_func(-1, 1, min, max)

    return (sums, value, x, y) => {
        let standard = sums[propname]
        const result = gaussian_func(standard)
        const new_value = parseFloat(value) + result * fstep
        if (new_value > 1) return 1
        if (new_value < 0) return 0
        return new_value
    }
}

const create_growing_func_r = (min, max, fstep) => {
    const gaussian_func_r = create_gaussian_func(-1, 1, min, max)
    const gaussian_func_g = create_gaussian_func(1, -1, min, max)
    const gaussian_func_b = create_gaussian_func(-1, 1, min, max)

    return (sums, value, x, y) => {
        let { red, green, blue } = sums
        const result_r = gaussian_func_r(red)
        const result_g = gaussian_func_g(green)
        const result_b = gaussian_func_b(blue)

        const new_value = parseFloat(value) + (result_r + 0.5 * result_g + 0.5 * result_b) * fstep
        if (new_value > 1) return 1
        if (new_value < 0) return 0
        return new_value
    }
}

const create_growing_func_g = (min, max, fstep) => {
    const gaussian_func_r = create_gaussian_func(-1, 1, min, max)
    const gaussian_func_g = create_gaussian_func(-1, 1, min, max)
    const gaussian_func_b = create_gaussian_func(1, -1, min, max)

    return (sums, value, x, y) => {
        let { red, green, blue } = sums

        const result_r = gaussian_func_r(red)
        const result_g = gaussian_func_g(green)
        const result_b = gaussian_func_b(blue)

        const new_value = parseFloat(value) + (0.5 * result_r + result_g + 0.5 * result_b) * fstep
        if (new_value > 1) return 1
        if (new_value < 0) return 0
        return new_value
    }
}

const create_growing_func_b = (min, max, fstep) => {
    const gaussian_func_r = create_gaussian_func(1, -1, min, max)
    const gaussian_func_g = create_gaussian_func(-1, 1, min, max)
    const gaussian_func_b = create_gaussian_func(-1, 1, min, max)

    return (sums, value, x, y) => {
        let { red, green, blue } = sums

        const result_r = gaussian_func_r(red)
        const result_g = gaussian_func_g(green)
        const result_b = gaussian_func_b(blue)

        const new_value = parseFloat(value) + (+0.5 * result_r + 0.5 * result_g + result_b) * fstep
        if (new_value > 1) return 1
        if (new_value < 0) return 0
        return new_value
    }
}


const create_cell = (x, y, values) => {
    const { red, green, blue } = values
    return { x, y, red, green, blue }
}

const get_value_r = (cell) => cell === undefined ? 0 : cell.red
const get_value_g = (cell) => cell === undefined ? 0 : cell.green
const get_value_b = (cell) => cell === undefined ? 0 : cell.blue

const create_filter_convs = (size, min, max) => {
    const filter_conv = create_filter_conv(size, create_func(min, max))
    return {
        red: {
            filter_conv,
            space_value_getter: get_value_r,
        },
        green: {
            filter_conv,
            space_value_getter: get_value_g,
        },
        blue: {
            filter_conv,
            space_value_getter: get_value_b,
        },
    }
}

const create_growing_funcs = (min, max, fstep) => {
    return {
        red: create_growing_func_r(min, max, fstep),
        green: create_growing_func_g(min, max, fstep),
        blue: create_growing_func_b(min, max, fstep),
    }
}

const dec_to_hex = (dec) => {
    return Math.floor(dec * 255).toString(16).padStart(2, '0')
}

const color_getter = (cell) => {
    const r = get_value_r(cell)
    const g = get_value_g(cell)
    const b = get_value_b(cell)

    const hex_r = dec_to_hex(r)
    const hex_g = dec_to_hex(g)
    const hex_b = dec_to_hex(b)
    return `#${hex_r}${hex_g}${hex_b}`
}

const create_get_init_position = (size) => {
    return () => {
        const space = create_space(size)

        for (let x = 0; x < size; x++) {
            for (let y = 0; y < size; y++) {
                const red = Math.random()
                const green = Math.random()
                const blue = Math.random()
                set_space_cell(space, x, y, create_cell(x, y, { red, green, blue }))
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

