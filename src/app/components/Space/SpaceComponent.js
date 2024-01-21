'use client'

import { useEffect, useRef } from 'react'
import styles from './Space.module.css'
import { on_each_space_cell } from '@/lib/lenia/space'
import { color_getter } from '@/lib/lenia'

const Component = ({ res, space, iteration, auto_download, prefix, stateId }) => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const context = canvas.getContext('2d')

        const { size } = space
        if (canvas.width !== size * res) {
            canvas.width = size * res
        }
        if (canvas.height !== size * res) {
            canvas.height = size * res
        }
        context.fillStyle = 'black'
        context.fillRect(0, 0, size * res, size * res)
        on_each_space_cell(space, ({ x, y }, cell) => {
            const color = color_getter(cell)
            context.fillStyle = color
            context.fillRect(x * res, y * res, res, res)
        })

        console.log({auto_download, prefix, iteration})

        if (auto_download) {
            const link = document.createElement('a')
            link.href = canvas.toDataURL('image/jpeg', 0.5)
            link.download = `${prefix}-${stateId}-${iteration.toString().padStart(5, '0')}.jpg`
            link.click()
        }
    }, [space, auto_download, prefix, iteration, res, stateId])

    return <canvas ref={canvasRef} className={styles.Space}></canvas>
}

export default Component
