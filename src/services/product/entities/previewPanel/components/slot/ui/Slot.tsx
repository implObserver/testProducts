import { useEffect, useState } from 'react';
import styles from './styles/Slot.module.css'
import { usePreviewPanelContext } from '../../../lib/context/Context';

export const Slot = ({ url, isActive }) => {
    const [hasError, setHasError] = useState(false);
    const preview = usePreviewPanelContext();
    useEffect(() => {
        const img = new Image();
        img.src = url;

        img.onload = () => {
            setHasError(false);
            if (isActive) {
                preview.setState(url)
            }
        };

        img.onerror = () => {
            setHasError(true);
            if (isActive) {
                preview.setState('')
            }
        };

        return () => {
            setHasError(false);
        };
    }, [url]);

    return (
        <>
            {hasError ? (
                <div className={styles.error}></div>
            ) : (
                <div className={styles.slot}
                    style={{
                        backgroundImage: `url(${url})`,
                    }}
                />
            )}
        </>
    )
}