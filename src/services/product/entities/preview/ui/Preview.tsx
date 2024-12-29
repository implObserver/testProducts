import { ImageContext } from "@/services/product/shared/ui/preview"
import { ShowCaseContainer } from "../component/showCaseFeatureContainer"
import { PreviewWrapper } from "../component/previewWrapper";
import styles from './styles/Preview.module.css'
import { ShowCaseContext } from "@/services/product/shared/ui/imageShowcase";
import { useProductContext } from "@/services/product/shared/lib";
import { useCustomState } from "@/common/shared/lib";
import { Link } from "react-router-dom";

export const PreviewEntity = () => {
    const context = useProductContext();

    const previewContext = context.preview;
    const url = useCustomState(previewContext.urls[0]);
    const imageContext: ImageContextType = {
        urls: url.getState(),
    }

    const showCaseContext: ImageShowcaseContextType = {
        preview: url,
        urls: previewContext.urls
    }

    return (
        <div>
            <Link to={`/products/${context.id}`} className={styles.entity__preview}>
                <ImageContext.Provider value={imageContext}>
                    <PreviewWrapper />
                </ImageContext.Provider>

                <ShowCaseContext.Provider value={showCaseContext}>
                    <ShowCaseContainer />
                </ShowCaseContext.Provider>
            </Link>
        </div>
    )
}