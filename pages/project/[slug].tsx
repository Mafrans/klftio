import type { NextPage } from 'next'
import '@fontsource/major-mono-display';
import '@fontsource/poppins';
import { useRouter } from 'next/dist/client/router';
import * as model from '../../util/model';
import { PageHead } from '../../components/PageHead';

const ProjectPage: NextPage = () => {
    const router = useRouter();
    const { slug } = router.query;

    const project = getProject(slug as string);
    if (!project) {
        router.push('/404');
        return null;
    }

    return <>
        <PageHead title={`${project.name} - Malte Klüft`} />
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
