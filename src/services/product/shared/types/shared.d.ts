interface PriceContextType {
    price: number,
    currency: string,
}

interface DescriptionContextType {
    description: string,
}

interface SegmentContextType {
    preview: StateHandler<PreviewUrls>,
    url: PreviewUrls,
}

interface ImageContextType {
    urls: PreviewUrls,
}

interface ImageShowcaseContextType {
    preview: StateHandler<PreviewUrls>,
    urls?: PreviewUrls[],
}

interface LogoContextType {
    logo: string
}

interface SearchPanelContextType {
    trigger: boolean,
    state: StateHandler<string>,
}

interface ResultsContainerContextType {
    keywords: string[],
    state: StateHandler<string>,
}

interface KeywordContainerContextType {
    state: StateHandler<string>,
}

interface Constructor {
    operation: string,
    product: TypedProduct
}