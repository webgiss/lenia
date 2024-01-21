import { apply_filter_conv } from '../filter_conv'

const mod = (x, n) => (x % n + n) % n

const get_space_key_normalized = (space, coord) => {
    let { size } = space
    let { x, y } = coord
    x = mod(x, size)
    y = mod(y, size)
    return x + y * size
}

export const create_space = (size) => {
    const space = {}
    space.size = size
    space.cells = new Array(size * size)
    return space
}

export const get_space_cell = (space, x, y) => {
    const key = get_space_key_normalized(space, { x, y })
    return space.cells[key]
}

export const set_space_cell = (space, x, y, cell) => {
    const key = get_space_key_normalized(space, { x, y })
    space.cells[key] = cell
}

export const apply_filter_conv_on_space = (old_space, new_space, cell_creator_by_values, growing_funcs, filter_convs) => {
    const { size } = old_space
    // console.log('apply_filter_conv_on_space', { old_space, new_space, cell_creator_by_values, growing_funcs, filter_convs })
    console.log('apply_filter_conv_on_space : start')
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            const sums = {}
            const old_values = {}
            const new_values = {}
            for (let name of Object.keys(filter_convs)) {
                const { filter_conv, space_value_getter } = filter_convs[name]
                old_values[name] = space_value_getter(get_space_cell(old_space, x, y))
                sums[name] = apply_filter_conv(filter_conv, (x0, y0) => space_value_getter(get_space_cell(old_space, x + x0, y + y0)))
            }
            for (let name of Object.keys(filter_convs)) {
                const growing_func = growing_funcs[name]
                new_values[name] = growing_func(sums, old_values[name], x, y)
            }
            for (let name of Object.keys(filter_convs)) {
                set_space_cell(new_space, x, y, cell_creator_by_values(x, y, new_values))
            }
        }
    }
    console.log('apply_filter_conv_on_space : stop')
    // console.log('apply_filter_conv_on_space => end', { old_space, new_space, cell_creator_by_values, growing_funcs, filter_convs })
}

export const on_each_space_cell = (space, func) => {
    const { size } = space
    for (let x = 0; x < size; x++) {
        for (let y = 0; y < size; y++) {
            func({ x, y }, get_space_cell(space, x, y))
        }
    }
}