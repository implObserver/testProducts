interface UntypedProducts {
    products: EscuelajsProduct | any,
}

interface TypedProducts {
    products: TypedProduct[],
}

interface EscuelajsProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    images: string[],
}

interface TypedProduct {
    id: number,
    price: Price,
    description: Description,
    preview: Preview,
}

interface Category {
    id: number,
    name: string,
    image: string,
}

interface Price {
    discount?: boolean,
    highDiscount?: boolean,
    price: number,
    discountPrice?: string,
    currency?: string,
}

interface Description {
    description: string
}

interface Preview {
    urls: Array<PreviewUrls>,
}

interface Description {
    description: string
}

interface Preview {
    urls: Array<PreviewUrls>,
}

interface PreviewUrls {
    url: string,
    srcSet?: string[]
}

