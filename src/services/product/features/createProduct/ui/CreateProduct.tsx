import { useAppDispatch } from "@/common/shared/lib"
import { selectionProductsActions } from "@/models/product";
import { ProductForm } from "@/services/product/entities/productForm"
import { useNewProductContext } from "@/services/product/shared/lib";

export const CreateProduct = () => {
    const product = useNewProductContext().getState().product;
    const dispatch = useAppDispatch();
    const handleSubmit = () => {
        dispatch(selectionProductsActions.addProduct(product))
    }
    return (
        <div onSubmit={handleSubmit}>
            <ProductForm></ProductForm>
        </div>
    )
}