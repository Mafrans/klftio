import type { NextPage } from 'next'
import Image from 'next/image'
import '@fontsource/major-mono-display';
import '@fontsource/poppins';
import { useRouter } from 'next/router';
import * as model from '../../util/model';
import { PageHead } from '../../components/PageHead';
import Cursor from '../../components/Cursor';
import { useEffect } from 'react';
import styles from '../../styles/ProjectPage.module.css';
import Link from 'next/link';

const ProjectPage: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    useEffect(() => {
        if (slug && !getProject(slug as string)) {
            router.push('/404');
        }
    }, [slug])

    const project = getProject(slug as string);
    if(!project) return null;

    const splitName = splitOnceMiddle(project.name, ' ');

    return <>
        <PageHead title={`${project.name} - Malte Klüft`} />
        <Cursor enabled={false} />
        <main>
            <section className={styles.hero}>
                <button className={styles.backButton}>
                    <Link href='/'>
                        <h3>↩ back</h3>
                    </Link>
                </button>
                <h1>
                    <span>
                        {'>'}<br/>
                        {splitName[1] && '>'}
                    </span>
                    {splitName[0]}<br/>{splitName[1]}
                    {splitName[1] && <span>{' \\'}</span>}
                </h1>
                <h2>{project.summary}</h2>
                <p>{project.description}</p>
                <img src={project.image} alt="Thumbnail" />
            </section>
        </main>
    </>
}

function getProject(slug: string): model.Project | null {
    return model.projects.find(it => model.toSlug(it.name) === slug) ?? null;
}

function splitOnceMiddle(value: string, splitter: string): string[] {
    const splitValue = value.split(splitter);
    const middle = Math.round(splitValue.length-1);

    if (middle === 0) return [value];

    return [
        splitValue.splice(0, middle).join(splitter),
        splitValue.join(splitter)
    ];
}

export default ProjectPage
