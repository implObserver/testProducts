import { useCustomState } from "@/common/shared/lib"
import { PreviewPanel, PreviewPanelContext } from "@/services/product/entities/previewPanel";
import { ZoomPreview, ZoomPreviewContext } from "@/services/product/entities/zoomPreview";
import { useProductContext } from "@/services/product/shared/lib"
import styles from './styles/SmartPreview.module.css'

export const SmartPreview = () => {
    const context = useProductContext();
    console.log(context)
    const url = context.preview.urls[0].url;
    const preview = useCustomState(url);

    return (
        <div className={styles.container}>
            <PreviewPanelContext.Provider value={preview}>
                <PreviewPanel></PreviewPanel>
            </PreviewPanelContext.Provider>
            <ZoomPreviewContext.Provider value={preview}>
                <ZoomPreview></ZoomPreview>
            </ZoomPreviewContext.Provider>
        </div>
    )
}