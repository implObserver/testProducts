export const getPagination = (products: TypedProduct[], pagination: Pagination) => {
    const offsetOfProducts = pagination.limit * pagination.offset;
    return products.slice(offsetOfProducts, offsetOfProducts + pagination.limit);
}