import styles from './page.module.css'
import Counter from '@/app/components/Counter'
import { Segment } from 'semantic-ui-react'

export default function Home() {
    return (
        <main className={styles.main}>
            <Segment>
                <p>
                    Get started by editing&nbsp;
                    <code className={styles.code}>src/app/page.js</code>
                </p>
            </Segment>
            <Segment>
                <Counter />
            </Segment>
        </main>
    )
}
