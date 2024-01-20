'use client'

import { counter, useSelector, useDispatch } from '@/lib/redux'
import Component from './CounterComponent'

const Container = () => {
    const dispatch = useDispatch()
    const count = useSelector(counter.selectCount)
    const incrementAmount = useSelector(counter.selectAmount)
    const incrementAsync = () => dispatch(counter.incrementAsync(incrementAmount))
    const incrementIfOddAsync = () => dispatch(counter.incrementIfOddAsync(incrementAmount))
    const decrement = () => dispatch(counter.slice.actions.decrement())
    const increment = () => dispatch(counter.slice.actions.increment())
    const incrementByAmount = () => dispatch(counter.slice.actions.incrementByAmount(incrementAmount))
    const setIncrementAmount = (value) => dispatch(counter.slice.actions.setIncrementAmount(value))

    return <Component
        count={count}
        increment={increment}
        decrement={decrement}
        incrementAmount={incrementAmount}
        incrementByAmount={incrementByAmount}
        incrementAsync={incrementAsync}
        incrementIfOddAsync={incrementIfOddAsync}
        setIncrementAmount={setIncrementAmount}
    />
}

export default Container