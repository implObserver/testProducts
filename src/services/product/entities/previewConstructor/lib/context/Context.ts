"use client";

import { createContext, useContext } from "react";

export const ZoomPreviewContext = createContext<undefined | StateHandler<string>>(undefined);

export function useZoomPreviewContext() {
    const props = useContext(ZoomPreviewContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ZoomPreviewContext');
    }
    return props;
}