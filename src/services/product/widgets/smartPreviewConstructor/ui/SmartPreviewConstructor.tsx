import { useCustomState } from "@/common/shared/lib"
import { PreviewPanel, PreviewPanelContext } from "@/services/product/entities/previewPanel";
import { ZoomPreview, ZoomPreviewContext } from "@/services/product/entities/zoomPreview";
import { ProductContext, useNewProductContext, useProductContext } from "@/services/product/shared/lib"
import styles from './styles/SmartPreviewConstructor.module.css'

export const SmartPreviewConstructor = () => {
    const context = useNewProductContext();
    const product = context.getState().product;
    const preview = useCustomState(product.preview.urls[0].url);

    return (
        <div className={styles.container}>
            <ProductContext.Provider value={context.getState().product}>
                <PreviewPanelContext.Provider value={preview}>
                    <PreviewPanel></PreviewPanel>
                </PreviewPanelContext.Provider>
                <ZoomPreviewContext.Provider value={preview}>
                    <ZoomPreview></ZoomPreview>
                </ZoomPreviewContext.Provider>
            </ProductContext.Provider>
        </div>
    )
}