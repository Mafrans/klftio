import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '../styles/ImageView.module.css';

type ImageViewProps = {
    src: string;
    visible: boolean;
    onClose: () => void; 
}

export function ImageView(props: ImageViewProps) {
    const ref = useRef<HTMLImageElement>(null);

    function handleClickOutside(event: React.MouseEvent) {
        if(!ref.current?.contains(event.target as Node)) {
            console.log('close');
            props.onClose();
        }
    }

    return <div onClick={handleClickOutside} className={classNames(styles.imageView, props.visible && styles.visible)}>
        <img ref={ref} src={props.src} alt='Zoomed in Image Viewer'/>
    </div>;
}