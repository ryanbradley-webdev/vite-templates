import Logo from '../../assets/logo.svg'
import styles from './Home.module.css'

export default function Home() {
    return (
        <main
            className={styles.main}
        >

            <section
                className={styles.section}
            >

                <img
                    src={Logo}
                    alt="Ryan Bradley Web Development"
                />

                <h1>
                    Vite Template
                </h1>

                <h2>
                    TypeScript, React-Router, Tanstack Query
                </h2>

            </section>

        </main>
    )
}