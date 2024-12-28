import { useEffect, useState } from "react";
import { useImageContext } from "../lib/context/Context";
import styles from "./styles/Preview.module.css";

export const Preview = () => {
    const context = useImageContext();
    const [hasError, setHasError] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = context.urls.url;

        img.onload = () => {
            setHasError(false);
        };

        img.onerror = () => {
            setHasError(true);
        };

        return () => {
            setHasError(false);
        };
    }, [context.urls.url]);

    return (
        <div className={styles.preview}>
            {hasError ? (
                <div className={styles.error}></div>
            ) : (
                <img
                    alt=""
                    src={context.urls.url}
                    sizes="(max-width: 1456px) 15vh, 217px"
                />
            )}
        </div>
    );
};