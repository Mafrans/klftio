import React, {useEffect, useRef, useState} from 'react';
import { MdVisibility } from 'react-icons/md';
import Image from 'next/image';
import styles from '../styles/Cursor.module.css';
import classNames from "classnames";

type CursorProps = {
    enabled: boolean
}

type CursorType = 'default' | 'pointer' | 'show';
type CursorStyle = 'default' | 'mix';
type CursorData = {
    type: CursorType,
    style: CursorStyle
}

function Cursor(props: CursorProps) {
    const [cursorData, setCursorData] = useState<CursorData>({ type: 'default', style: 'default' });
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (props.enabled)
            document.styleSheets[0].addRule('*', 'cursor: none !important');
        else
            document.styleSheets[0].removeRule(0);
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
            }

            const target = event.composedPath().find(it =>
                it instanceof HTMLElement && it.hasAttribute('data-cursor')
            ) as HTMLElement;

            if (target?.hasAttribute('data-cursor')) {
                const value = target.getAttribute('data-cursor');
                const splitData = value?.split('@');

                const type = (splitData?.[0] as CursorType) ?? 'default';
                const style = (splitData?.[1] as CursorStyle) ?? 'default';

                setCursorData({ type, style });
            }
            else {
                setCursorData({ type: 'default', style: 'default' });
            }
        }

        window.addEventListener('mousemove', updateCursor);
    }, []);

    return props.enabled ? <div className={styles.cursorContainer}>
        <div
            data-hidden-until-moved={true}
            ref={ref}
            className={classNames(styles.cursor, styles[cursorData.type], styles[cursorData.style])}
        >
            { cursorData.type === 'show' ? <MdVisibility /> : null}
        </div>
    </div> : null;
}

export default Cursor;