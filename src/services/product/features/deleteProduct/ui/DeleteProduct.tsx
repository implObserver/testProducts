import { useAppDispatch } from "@/common/shared/lib";
import { Button } from "@/common/shared/ui/button";
import { selectionProductsActions } from "@/models/product";
import { useProductContext } from "@/services/product/shared/lib";
import styles from './styles/DeleteProduct.module.css'
import { useNavigate } from "react-router-dom";

export const DeleteProduct = () => {
    const dispatch = useAppDispatch();
    const context = useProductContext();
    const navigation = useNavigate();
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (confirm('Внимание, это удалит текущий продукт. Если продукт был создан вами - он удалится навсегда')) {
            dispatch(selectionProductsActions.deleteProduct(context.id))
            console.log('Продукт удален');
            navigation('/products')
        } else {
            console.log('Отмена действия');
        }
    }

    return (
        <div
            onClick={handleClick}>
            <div className={styles.button}>
                <Button name={'Удалить'}></Button>
            </div>
        </div>
    )
}