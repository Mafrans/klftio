import type { NextPage } from 'next'
import '@fontsource/major-mono-display';
import '@fontsource/poppins';
import { useRouter } from 'next/router';
import * as model from '../../util/model';
import { PageHead } from '../../components/PageHead';
import Cursor from '../../components/Cursor';
import { useEffect } from 'react';
import styles from '../../styles/ProjectPage.module.css';
import Link from 'next/link';
import { RotatingPanel } from '../../components/RotatingPanel';

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
        <Cursor enabled={true} />
        <main>
            <section className={styles.hero}>
                <Link href='/'>
                    <button data-cursor='pointer' className={styles.backButton}>
                        <h3>↩ back</h3>
                    </button>
                </Link>
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
            <section className={styles.gallery}>
                { project.gallery.map(item => 
                    <RotatingPanel>
                        <div data-cursor='show@mix' className={styles.galleryItem} style={{backgroundImage: `url(${item.image})`}}>
                            <h3>{item.name}</h3>
                            <p>{item.summary}</p>
                        </div>
                    </RotatingPanel>
                ) }
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
