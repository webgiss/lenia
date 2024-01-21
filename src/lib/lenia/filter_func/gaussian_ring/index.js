export const create_func = (min, max) => {
    const mid = (min + max) / 2
    const halflen = (max - min) / 2
    return (coord, min, max) => {
        const { x, y } = coord
        const dist = Math.sqrt((x) ** 2 + (y) ** 2)
        return Math.exp(- (((dist - mid) / halflen) ** 2))
    }
}
