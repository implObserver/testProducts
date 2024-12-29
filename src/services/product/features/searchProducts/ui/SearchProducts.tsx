import { useSelector } from "react-redux";
import { productsFilter } from "@/services/product/shared/lib";
import { selectionProductsActions, selectProducts } from "@/models/product";
import { SearchPanel } from "@/services/product/entities/searchPanel";
import { useAppDispatch } from "@/common/shared/lib";
import { searchInputActions, selectSearchInput } from "@/models/searchProductInput";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const SearchProducts = () => {
    const searchInputState = useSelector(selectSearchInput);
    const state = useSelector(selectProducts);
    const dispatch = useAppDispatch();
    const location = useLocation().pathname;

    useEffect(() => {
        const key = searchInputState.request;
        const products = productsFilter(state.category, key);
        console.log(products)
        dispatch(selectionProductsActions.setRelative(products))
    }, [state.category, location])

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.value;
        const products = productsFilter(state.category, key);
        dispatch(searchInputActions.setRequest(e.target.value))
        dispatch(selectionProductsActions.setRelative(products))
    }

    return (
        <div onChange={changeHandler}>
            <SearchPanel></SearchPanel>
        </div>
    )
}