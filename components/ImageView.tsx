import React, { useRef } from 'react';
import ReactDOM from 'react-dom';
import Image from 'next/image';
import classNames from 'classnames';
import styles from '../styles/ImageView.module.css';
import { MdClose } from 'react-icons/md';
import { useEffect } from 'react';

type ImageViewProps = {
    src: string;
    visible: boolean;
    onClose: () => void; 
}

export function ImageView(props: ImageViewProps) {
    const ref = useRef<HTMLImageElement>(null);

    useEffect(() => {
        window.addEventListener('keyup', event => {
            if (props.visible && event.code === 'Escape') {
                props.onClose();
            }
        });
    }, [props.visible]);

    function handleClickOutside(event: React.MouseEvent) {
        if(!ref.current?.contains(event.target as Node)) {
            props.onClose();
        }
    }

    return <div onClick={handleClickOutside} className={classNames(styles.imageView, props.visible && styles.visible)}>
        <img ref={ref} src={props.src} alt='Zoomed in Image Viewer'/>
        <button data-cursor={'pointer'} className={styles.closeButton}>
            <MdClose size={48} color='white' />
        </button>
    </div>;
}