'use client'

import { space, useSelector, useDispatch } from '@/lib/redux'
import Component from './ControlComponent'

const Container = ({ ...params }) => {
    const dispatch = useDispatch()
    const on_next_iter = () => dispatch(space.slice.actions.step())
    const on_next_iters = () => dispatch(space.slice.actions.steps())
    const on_reset = () => dispatch(space.slice.actions.init())
    const iteration = useSelector(space.selectIteration)
    const auto_download = useSelector(space.selectAutoDownload)
    const prefix = useSelector(space.selectPrefix)

    const on_prefix_change = (value) => dispatch(space.slice.actions.change_prefix(value))
    const on_auto_download_change = (value) => dispatch(space.slice.actions.set_auto_download(value))

    return <Component
        on_next_iter={on_next_iter}
        on_next_iters={on_next_iters}
        on_reset={on_reset}
        iteration={iteration}
        auto_download={auto_download}
        
        prefix={prefix}
        on_prefix_change={on_prefix_change}
        on_auto_download_change={on_auto_download_change}
        {...params}
    />
}

export default Container