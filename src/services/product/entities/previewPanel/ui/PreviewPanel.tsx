import { useProductContext } from "@/services/product/shared/lib"
import { Slot } from "../components/slot";
import styles from './styles/PreviewPanel.module.css'
import { useCustomState } from "@/common/shared/lib";
import { usePreviewPanelContext } from "../lib/context/Context";

export const PreviewPanel = () => {
    const urls = useProductContext().preview.urls;
    const isActive = useCustomState(0);
    const preview = usePreviewPanelContext();

    const handleMouseMove = (url: string, index: number) => {
        preview.setState(url)
        isActive.setState(index);
    };

    const fill = () => {
        console.log(urls)
        return urls.map((url, index) => {
            return (
                <div key={index} onMouseMove={() => handleMouseMove(url.url, index)}>
                    {isActive.getState() === index
                        ? <div className={styles.active}>
                            <Slot key={index} url={url.url}></Slot>
                        </div>
                        : <Slot key={index} url={url.url}></Slot>
                    }
                </div>
            )
        });
    };

    return (
        <div className={styles.panel}>
            {fill()}
        </div>
    )
}