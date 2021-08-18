import React, {useEffect, useRef, useState} from 'react';
import styles from '../styles/Cursor.module.css';
import classNames from "classnames";

type CursorProps = {
    enabled: boolean
}

type CursorType = 'default' | 'pointer'

function Cursor(props: CursorProps) {
    const [type, setType] = useState<CursorType>('default');
    const ref = useRef<HTMLDivElement>(null);
    const lastScroll = useRef<number>(0);
    
    useEffect(() => {
        if (props.enabled)
            document.body.style.setProperty('cursor', 'none', 'important');
        else
            document.body.style.setProperty('cursor', '');
    }, [props.enabled])

    useEffect(() => {

        function updateCursor(event: MouseEvent | Event) {
            if (ref.current) {
                if (ref.current.hasAttribute('data-hidden-until-moved')) {
                    ref.current.removeAttribute('data-hidden-until-moved');
                }

                const style = ref.current.style;
                if (event instanceof MouseEvent) {
                    style.left = Math.min(event.pageX, document.body.offsetWidth-ref.current.offsetWidth) + 'px';
                    style.top = Math.min(event.pageY, document.body.offsetHeight-ref.current.offsetHeight) + 'px';
                }
                else {
                    if (style.top) {
                        style.top = parseInt(style.top.substring(-2)) + (window.pageYOffset - lastScroll.current) + 'px';
                    }
                    lastScroll.current = window.pageYOffset;
                }
            }

            const target = event.composedPath().find(it =>
                it instanceof HTMLElement && it.hasAttribute('data-cursor')
            ) as HTMLElement;

            setType(
                target?.hasAttribute('data-cursor') ?
                    target.getAttribute('data-cursor') as CursorType
                    : 'default'
            );
        }

        window.addEventListener('mousemove', updateCursor);
    }, []);

    return props.enabled ? <div className={styles.cursorContainer}>
        <div
            data-hidden-until-moved={true}
            ref={ref}
            className={classNames(styles.cursor, styles[type])}
        />
    </div> : null;
}

export default Cursor;