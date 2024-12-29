interface TypedProducts {
    paginated: TypedProduct[],
    favoritesPaginated: TypedProduct[],
    products: TypedProduct[],
    relative: TypedProduct[],
    category: TypedProduct[],
    favorites: TypedProduct[],
}

interface FakestoreProduct {
    id: string,
    title: string,
    price: number,
    description: string,
    category: Category,
    image: string,
}

interface EscuelajsProduct {
    id: string,
    title: string,
    price: number,
    description: string,
    category: Category,
    images: string[],
}

interface TypedProduct {
    id: string,
    title: string,
    price: Price,
    description: Description,
    preview: Preview,
    category: Category,
    isFavorite: boolean,
    isCreated?: boolean,
}

interface Category {
    id: string,
    name: string,
    image: string,
}

interface Price {
    discount?: boolean,
    highDiscount?: boolean,
    price: number,
    discountPrice?: string,
    currency?: string,
    percents?: number,
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

interface Categories {
    active: Category,
    categories: Category[],
}