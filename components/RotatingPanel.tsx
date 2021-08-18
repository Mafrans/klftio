import React, { PropsWithChildren, useRef, useState } from "react";
import styles from '../styles/RotatingPanel.module.css';

export function RotatingPanel(props: PropsWithChildren<{}>) {
    const [rotation, setRotation] = useState<{x: number, y: number} | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    
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
    return <div
        className={styles.panel}
        style={{ transform: `perspective(2000px) rotateX(${rotation?.y ?? 0}deg) rotateY(${rotation?.x ?? 0}deg)` }}
        onMouseMove={handleMouseMove} 
        ref={ref}
        onMouseOut={() => setRotation({x:0,y:0})}
    >
        { props.children }
    </div>
}