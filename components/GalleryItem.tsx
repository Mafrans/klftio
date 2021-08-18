import React from 'react';
import * as model from '../util/model';
import { RotatingPanel } from './RotatingPanel';
import styles from '../styles/GalleryItem.module.css';
import classNames from 'classnames';

type GalleryItemProps = {
    item: model.GalleryItem;
    onClick: (event: React.MouseEvent) => void;
}

export function GalleryItem(props: GalleryItemProps) {
    return <RotatingPanel>
        <div 
            onClick={props.onClick} 
            data-cursor='show@mix' className={classNames(styles.galleryItem)} 
            style={{backgroundImage: `url(${props.item.image})`}}
        >
            <h3>{props.item.name}</h3>
            <p>{props.item.summary}</p>
        </div>
    </RotatingPanel>
}