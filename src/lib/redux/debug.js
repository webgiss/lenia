'use client'

export const debug = (params) => {
    return 
    console.log('debug',params)
    for (let key in params) {
        window[key] = params[key]
    }
}