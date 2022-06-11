export const calcTotalPrice = (items) => items.reduce((acc, item) => Math.round((acc += (Math.ceil(item.price) * 79.51))), 0)
export const kgzPrice = (item) => Math.round((Math.ceil(item) * 79.51))