import { nanoid } from "nanoid";

export const getDefaultProduct = (): TypedProduct => {
    return {
        id: nanoid(),
        title: '',
        price: {
            discount: false,
            highDiscount: false,
            price: 0,
            discountPrice: '',
            currency: '',
            percents: 0,
        },
        description: {
            description: ''
        },
        preview: {
            urls: [
                {
                    url: '',
                    srcSet: [],
                },
            ]
        },
        category: {
            id: nanoid(),
            name: '',
            image: '',
        },
        isFavorite: false,
        isCreated: true,
    }
}