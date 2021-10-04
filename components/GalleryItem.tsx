import React, { useRef } from 'react';
import * as model from '../util/api';
import { RotatingPanel } from './RotatingPanel';
import styles from '../styles/GalleryItem.module.css';
import classNames from 'classnames';

type GalleryItemProps = {
    item: model.GalleryItem;
    onClick: () => void;
}

export function GalleryItem(props: GalleryItemProps) {
    const ref = useRef<HTMLDivElement>(null);

    function handleKeyboardEnter(event: React.KeyboardEvent) {
        if (document.activeElement === ref.current && event.code === 'Enter') {
            props.onClick();
        }
    }

    return <RotatingPanel>
        <div 
            tabIndex={0}
            ref={ref}
            onKeyUp={handleKeyboardEnter}
            onClick={props.onClick} 
            data-cursor='show@mix' className={classNames(styles.galleryItem)} 
            style={{backgroundImage: `url(${props.item.image})`}}
        >
            <h3>{props.item.name}</h3>
            <p>{props.item.summary}</p>
        </div>
    </RotatingPanel>
}