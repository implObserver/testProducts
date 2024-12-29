import { useAppDispatch } from "@/common/shared/lib"
import { selectionProductsActions } from "@/models/product";
import { ProductForm } from "@/services/product/entities/productForm"
import { useNewProductContext } from "@/services/product/shared/lib";
import { useNavigate } from "react-router-dom";

export const EditProduct = () => {
    const product = useNewProductContext().getState().product;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    
    const handleSubmit = () => {
        dispatch(selectionProductsActions.editProduct(product))
        navigate(`/products/${product.id}`);
    }
    return (
        <div onSubmit={handleSubmit}>
            <ProductForm></ProductForm>
        </div>
    )
}