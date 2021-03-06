import type { NextPage } from 'next'
import { PageHead } from '../components/PageHead'
import styles from '../styles/Home.module.css'
import * as model from '../public/model';
import '@fontsource/major-mono-display';
import '@fontsource/poppins';
import { Project } from '../components/Project';
import { useEffect, useState } from 'react';

const Home: NextPage = () => {
    const [scroll, setScroll] = useState<number>(0);
    useEffect(() => {
        window.addEventListener('scroll', event => {
            setScroll(window.pageYOffset);
        })
    }, [])

    return <>
        <PageHead title='Home - Malte Klüft' />
        <main>
            <section className={styles.hero}>
                <h1>
                    <span>$<br/>|</span>
                    Hello<br/>i am malte
                </h1>
                <p>i make cool stuff, occasionally</p>
            </section>
            <section className={styles.projects}>
                { model.projects.map(project => 
                    <Project project={project} />
                ) }
            </section>
        </main>
    </>
}

export default Home
