import React, { useRef } from 'react';
import Link from 'next/link'
import styles from '../styles/Project.module.css';
import * as model from '../util/model';
import { useRouter } from 'next/dist/client/router';
import { RotatingPanel } from './RotatingPanel';

type ProjectProps = {
    project: model.Project
}

export function Project({project}: ProjectProps) {
    const router = useRouter();
    const ref = useRef<HTMLDivElement>(null);
    const slug = model.toSlug(project.name);

    function handleKeyboardEnter(event: React.KeyboardEvent) {
        console.log(event);
        
        if (document.activeElement === ref.current && event.code === 'Enter') {
            router.push('/project/' + slug);
        }
    }

    return <RotatingPanel>
        <Link href={'/project/' + slug}>
            <div 
                data-cursor={'pointer@mix'}
                ref={ref}
                style={{ backgroundImage: `url(${project.image})` }}
                className={styles.project} 
                tabIndex={0}
                onKeyUp={handleKeyboardEnter}
            >
                <h3>{ project.name }</h3>
                <p>{ project.summary }</p>
            </div>
        </Link>
    </RotatingPanel>
}