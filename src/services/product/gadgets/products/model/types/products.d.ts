interface ProductFeatures {
    like: React.ReactElement
}

interface IsFavourite {
    val: boolean;
    writable: boolean;
}

interface ProductsSystem {
    products: TypedProduct[],
    paginated: TypedProduct[],
}