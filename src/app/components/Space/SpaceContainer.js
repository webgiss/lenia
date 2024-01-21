'use client'

import { space, useSelector, useDispatch } from '@/lib/redux'
import Component from './SpaceComponent'

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Container = ({ ...params }) => {
    const dispatch = useDispatch()
    const spaceValue = useSelector(space.selectSpace)
    const on_init = () => dispatch(space.slice.actions.init())
    // delay(1).then(() => dispatch(space.slice.actions.step()))
    const iteration = useSelector(space.selectIteration)
    const auto_download = useSelector(space.selectAutoDownload)
    const prefix = useSelector(space.selectPrefix)
    const stateId = useSelector(space.selectId)


    return <Component
        space={spaceValue}
        on_init={on_init}
        iteration={iteration}
        auto_download={auto_download}
        prefix={prefix}
        stateId={stateId}
        { ...params }
    />
}

export default Container