import type { NextPage } from 'next'
import { PageHead } from '../components/PageHead'
import styles from '../styles/HomePage.module.css'
import * as api from '../util/api';
import '@fontsource/major-mono-display';
import '@fontsource/poppins';
import { Project } from '../components/Project';
import { useEffect, useState } from 'react';
import Cursor from "../components/Cursor";

type BlogPageProps = {
    posts: api.BlogPost[]
}

const BlogPage: NextPage<BlogPageProps> = ({ posts }: BlogPageProps) => {
    const [scroll, setScroll] = useState<number>(0);
    useEffect(() => {
        window.addEventListener('scroll', event => {
            setScroll(window.pageYOffset);
        })
    }, [])

    return <>
        <PageHead title='Blog - Malte Klüft' />
        <Cursor enabled={true} />
        <main>
            <section className={styles.hero}>
                <h1>
                    <span>$<br/>|</span>
                    Hello<br/>i am malte
                </h1>
                <h2>i make cool stuff, occasionally</h2>
            </section>
            <section className={styles.projects}>
                { api.projects.map((project, i) =>
                    <Project key={i} project={project} />
                ) }
            </section>
        </main>
    </>
}

export async function getStaticProps() {
    return {
        props: {
            posts: await api.apiFetch('blog-posts'),
        }
    }
}

export default BlogPage
