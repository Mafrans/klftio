import React, { useRef, useState } from 'react';
import Link from 'next/link'
import styles from '../styles/Project.module.css';
import * as model from '../util/model';
import { useRouter } from 'next/dist/client/router';

type ProjectProps = {
    project: model.Project
}

export function Project({project}: ProjectProps) {
    const [rotation, setRotation] = useState<{x: number, y: number} | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const router = useRouter();
    const slug = model.toSlug(project.name);

    function handleMouseMove(event: React.MouseEvent) {
        if(!ref.current) return;

        const uv = {
            x: (event.pageX - ref.current.offsetLeft) / ref.current.offsetWidth,
            y: (event.pageY - ref.current.offsetTop) / ref.current.offsetHeight
        }

        setRotation({
            x: -(uv.x - 0.5) * 15,
            y: (uv.y - 0.5) * 15
        })
    }

    function handleKeyboardEnter(event: React.KeyboardEvent) {
        if (document.activeElement === ref.current && event.code === 'Enter') {
            router.push('/project/' + slug);
        }
    }

    return <Link href={'/project/' + slug}>
            <div 
                data-cursor={'pointer'}
                style={{
                    backgroundImage: `url(${project.image})`,
                    transform: `perspective(2000px) rotateX(${rotation?.y ?? 0}deg) rotateY(${rotation?.x ?? 0}deg)`
                }}
                ref={ref}
                onMouseMove={handleMouseMove} 
                onMouseOut={() => setRotation({x:0,y:0})}
                className={styles.project} 
                tabIndex={0}
                onKeyUp={handleKeyboardEnter}
            >
            <h2>{ project.name }</h2>
            <p>{ project.summary }</p>
        </div>
    </Link>;
}