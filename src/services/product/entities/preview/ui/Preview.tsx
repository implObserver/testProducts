'use client';

import { ImageContext } from "@/services/product/shared/ui/preview"
import { LikeContainer } from "../component/likeFeatureContainer"
import { ShowCaseContainer } from "../component/showCaseFeatureContainer"
import { useEntityPreviewContext } from "../lib/context/Context";
import { PreviewWrapper } from "../component/previewWrapper";
import styles from './styles/Preview.module.css'
import { ShowCaseContext } from "@/services/product/shared/ui/imageShowcase";
import { useProductContext } from "@/services/product/shared/lib";
import { useCustomState } from "@/common/shared/lib";

export const PreviewEntity = () => {
    const like = useEntityPreviewContext().like;
    const previewContext = useProductContext().preview;
    const url = useCustomState(previewContext.urls[0]);

    const imageContext: ImageContextType = {
        urls: url.getState(),
    }

    const showCaseContext: ImageShowcaseContextType = {
        preview: url,
        urls: previewContext.urls
    }

    return (
        <div className={styles.entity__preview}>
            <ImageContext.Provider value={imageContext}>
                <PreviewWrapper />
            </ImageContext.Provider>

            <LikeContainer>
                {like}
            </LikeContainer>

            <ShowCaseContext.Provider value={showCaseContext}>
                <ShowCaseContainer />
            </ShowCaseContext.Provider>
        </div>
    )
}