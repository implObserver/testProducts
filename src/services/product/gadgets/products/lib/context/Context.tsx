import { createContext, useContext } from "react";

export const ProductsContext = createContext<undefined | TypedProduct[]>(undefined);

export function useProductsContext() {
    const props = useContext(ProductsContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a ProductsContext');
    }
    return props;
}