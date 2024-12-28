import { createContext, useContext } from "react";

export const ProductFormContext = createContext<undefined | StateHandler<TypedProduct>>(undefined);

export const useProductFormContext = () => {
    const props = useContext(ProductFormContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ProductFormContext');
    }
    return props;
}