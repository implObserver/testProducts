import { createContext, useContext } from "react";

export const NewProductContext = createContext<undefined | StateHandler<Constructor>>(undefined);

export function useNewProductContext() {
    const props = useContext(NewProductContext);
    if (props === undefined) {
        throw new Error('use this context must be used with a NewProduct context');
    }
    return props;
}