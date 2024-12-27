const adaptEscuelajsProduct = (product: EscuelajsProduct): TypedProduct => {
    const typedProduct: TypedProduct = {
        id: product.id,
        title: product.title,
        price: {
            price: product.price,
            currency: "$",
            discount: false,
            highDiscount: false,
        },
        description: {
            description: product.description,
        },
        preview: {
            urls: product.images.map((image) => ({
                url: image,
            })),
        },
        category: product.category,
        isFavorite: false,
    };

    return typedProduct
}

const adaptEscuelajsProductWithDiscount = (product: EscuelajsProduct, discountedId: number): TypedProduct => {
    const adaptedProduct = adaptEscuelajsProduct(product);
    if (product.id === discountedId) {
        adaptedProduct.price.discount = true;
        adaptedProduct.price.highDiscount = adaptedProduct.price.price > 100;
        adaptedProduct.price.discountPrice = (adaptedProduct.price.price * 0.9).toFixed(2);
    }
    return adaptedProduct;
};

export const adaptEscuelajsProducts = (apiResponse: EscuelajsProduct[]): TypedProducts => {
    return {
        products: apiResponse.map(product => {
            const relevantId = product.id % 4 === 0
                ? product.id
                : -1

            return adaptEscuelajsProductWithDiscount(product, relevantId);
        }),
    };
}