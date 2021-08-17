import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/Cursor.module.css';
import classNames from "classnames";

type CursorProps = {

}

type CursorType = 'default' | 'pointer'

function Cursor(props: CursorProps) {
    const [type, setType] = useState<CursorType>('default');
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        document.body.style.setProperty('cursor', 'none', 'important');

        window.addEventListener('mousemove', event => {
            if (ref.current) {
                ref.current.style.left = event.pageX + 'px';
                ref.current.style.top = event.pageY + 'px';
            }

            if (event.target instanceof HTMLElement) {
                setType(
                    event.target.hasAttribute('data-cursor') ?
                        event.target.getAttribute('data-cursor') as CursorType
                        : 'default'
                );
            }
        });
    }, []);

    return <div
        ref={ref}
        className={classNames(styles.cursor, styles[type])}
    >

    </div>;
}

export default Cursor;