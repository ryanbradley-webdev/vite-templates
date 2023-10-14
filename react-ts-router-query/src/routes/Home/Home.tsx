import { useQuery } from '@tanstack/react-query'
import { getLibraries } from '../../lib/getLibraries'
import Logo from '../../assets/logo.svg'
import styles from './Home.module.css'

export default function Home() {
    const { data: libraries } = useQuery({
        queryFn: getLibraries,
        queryKey: ['libraries']
    })

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

                {libraries && (
                    <h2>
                        
                        {libraries.map((library, idx) => (
                            <span
                                key={idx}
                            >
                                {library + (idx < libraries.length - 1 ? ', ' : '')}
                            </span>
                        ))}

                    </h2>
                )}

            </section>

        </main>
    )
}