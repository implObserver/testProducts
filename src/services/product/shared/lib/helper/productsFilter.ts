export const productsFilter = (products: TypedProduct[], key: string) => {
    const lowerCaseKey = key.toLowerCase();
    return products.filter(product => product.title.toLowerCase().includes(lowerCaseKey));
}

export const productsFilterForCategory = (products: TypedProduct[], id: string) => {
    if (id === 'all') {
        return products;
    }
    return products.filter(product => product.category.id === id);
}