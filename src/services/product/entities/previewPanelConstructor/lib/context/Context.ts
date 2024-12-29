import { createContext, useContext } from "react";

export const PreviewPanelContext = createContext<undefined | StateHandler<string>>(undefined);

export function usePreviewPanelContext() {
    const props = useContext(PreviewPanelContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a PreviewPanelContext');
    }
    return props;
}