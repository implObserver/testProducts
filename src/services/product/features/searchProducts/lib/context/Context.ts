import { createContext, useContext } from "react";

export const SearchProductsContext = createContext<undefined | StateHandler<TypedProduct[]>>(undefined);

export const useSearchProductsContext = () => {
    const props = useContext(SearchProductsContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a SearchProductsContext');
    }
    return props;
}