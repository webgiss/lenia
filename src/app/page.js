import styles from './page.module.css'
import Counter from '@/app/components/Counter'
import Space from '@/app/components/Space'
import Control from '@/app/components/Control'
import { Segment } from 'semantic-ui-react'

export default function Home() {
    return (
        <main className={styles.main}>
            <Segment>
                <Space res={5} />
                <Control />
            </Segment>
        </main>
    )
}
