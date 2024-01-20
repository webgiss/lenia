'use client'

import styles from './Counter.module.css'
import { Button, Icon, Input, Label } from 'semantic-ui-react'

const LocalButton = ({ onAction, label, icon, ariaLabel }) => {
    if (!ariaLabel) {
        ariaLabel = label
    }
    if (icon && label) {
        return <Button as='div' labelPosition='right' onClick={onAction}>
            <Button icon><Icon name={icon}></Icon></Button>
            <Label as='a' aria-label={ariaLabel} basic pointing='left'>{label}</Label>
        </Button>
    }

    return <Button aria-label={ariaLabel} onClick={onAction} icon={icon}>{label}</Button>
}

const Component = ({ count, increment, decrement, incrementAmount, setIncrementAmount, incrementByAmount, incrementAsync, incrementIfOddAsync }) => {
    return <div>
        <div className={styles.row}>
            <LocalButton icon="minus" ariaLabel="Decrement value" onAction={decrement} />
            <span className={styles.value}>{count}</span>
            <LocalButton icon="plus" ariaLabel="Increment value" onAction={increment} />
        </div>
        <div className={styles.row}>
            <Input
                className={styles.textbox}
                aria-label="Set increment amount"
                value={incrementAmount}
                onChange={(e) => setIncrementAmount(Number(e.target.value ?? 0))}
            />
            <LocalButton icon="plus" label="Add Amount" onAction={incrementByAmount} />
            <LocalButton icon="plus" label="Add Async" onAction={incrementAsync} />
            <LocalButton icon="plus" label="Add If Odd" onAction={incrementIfOddAsync} />
        </div>
    </div>

}

export default Component