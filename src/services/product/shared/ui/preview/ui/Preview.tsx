import { useImageContext } from "../lib/context/Context";
import styles from "./styles/Preview.module.css";

export const Preview = () => {
    const context = useImageContext();
    return (
        <div className={styles.preview}>
            <img
                alt=""
                src={context.urls.url}
                sizes="(max-width: 1456px) 15vh, 217px"
            />
        </div>
    );
};