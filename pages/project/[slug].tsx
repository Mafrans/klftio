import type { NextPage } from 'next'
import '@fontsource/major-mono-display';
import '@fontsource/poppins';
import { useRouter } from 'next/router';
import * as model from '../../util/model';
import { PageHead } from '../../components/PageHead';
import Cursor from '../../components/Cursor';
import { useEffect } from 'react';

const ProjectPage: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const project = getProject(slug as string);

    useEffect(() => {
        if (!project) {
            router.push('/404');
        }
    }, [project]);

    if(!project) return null;

    return <>
        <PageHead title={`${project.name} - Malte Klüft`} />
        <Cursor enabled={false} />
        <main>
            <section>
                <h1>{project.name}</h1>
                <p>{project.summary}</p>
                <img src={project.image} alt="Thumbnail" />
            </section>
        </main>
    </>
}

function getProject(slug: string): model.Project | null {
    return model.projects.find(it => model.toSlug(it.name) === slug) ?? null;
}

export default ProjectPage
