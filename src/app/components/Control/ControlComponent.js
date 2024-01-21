'use client'

import { Button, Checkbox, Input } from 'semantic-ui-react'
import './Control.css'

const Component = ({ on_next_iter, on_next_iters, on_reset, iteration, auto_download, prefix, on_prefix_change, on_auto_download_change}) => {
    return <div className='Control'>
        <p>
        <Input value={iteration} readOnly />
        </p>
        <p>
            <Input value={prefix} onChange={(event) => on_prefix_change(event.target.value)} />
            <Checkbox label="Auto Download" checked={auto_download} onChange={(event, {checked}) => on_auto_download_change(checked)} />
        </p>
        <Button onClick={() => on_next_iter()}>Next Iteration</Button>
        <Button onClick={() => on_next_iters()}>Next Iterations</Button>
        <Button onClick={() => on_reset()}>Reset</Button>
    </div>
}

export default Component
