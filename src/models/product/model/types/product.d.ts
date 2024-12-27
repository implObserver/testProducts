interface TypedProducts {
    products: TypedProduct[],
}

interface FakestoreProduct {
    id: number,
    title: string,
    price: number,
    description: string,
    category: Category,
    image: string,
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
    title: string,
    price: Price,
    description: Description,
    preview: Preview,
    category: Category,
    isFavorite: boolean,
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

interface Pagination {
    offset: number,
    limit: number,
}