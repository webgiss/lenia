export const apply_filter_conv = (filter_conv, value_getter) => {
    const { size, func, factor } = filter_conv
    let sum = 0
    for (let x = Math.floor(-size); x <= size; x++) {
        for (let y = Math.floor(-size); y <= size; y++) {
            const value = value_getter(x, y)
            const weight = func({ x, y })
            sum += value * weight
        }
    }
    return sum / factor
}

const get_factor = (filter_conv) => {
    return apply_filter_conv(filter_conv, () => 1)
}

export const create_filter_conv = (size, func) => {
    const filter_conv = { size, func, factor: 1 }
    filter_conv.factor = get_factor(filter_conv)
    return filter_conv
}
