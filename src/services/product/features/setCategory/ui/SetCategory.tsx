import { useSelector } from "react-redux";
import { productsFilterForCategory } from "@/services/product/shared/lib";
import { selectCategories, selectionProductsActions, selectProducts } from "@/models/product";
import { useAppDispatch } from "@/common/shared/lib";
import { useEffect } from "react";
import { Categories } from "@/services/product/entities/categories";

export const SetCategory = () => {
    const category = useSelector(selectCategories).active;
    const state = useSelector(selectProducts);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (category) {
            const products = productsFilterForCategory(state.products, category.id);
            dispatch(selectionProductsActions.setCategory(products));
        }
    }, [category])

    return (
        <div>
            <Categories></Categories>
        </div>
    )
}