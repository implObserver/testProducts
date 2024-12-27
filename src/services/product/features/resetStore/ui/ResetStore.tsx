import { persistor } from "@/app/model/store/Store";
import { useAppDispatch, useCustomState } from "@/common/shared/lib";
import { Button } from "@/common/shared/ui/button";
import { productsPaginationActions, selectionProductsActions, selectProducts } from "@/models/product";
import styles from './styles/ResetStore.module.css'
import { useSelector } from "react-redux";

export const ResetStore = () => {
    const dispatch = useAppDispatch();
    const products = useSelector(selectProducts).products;
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (confirm('Внимание, это сбросит магазин и все изменения в начальное состояние, вы потеряете все созданные продукты')) {
            persistor.purge();
            dispatch(selectionProductsActions.resetState())
            dispatch(productsPaginationActions.resetState())
            console.log('Магазин сброшен');
        } else {
            console.log('Отмена действия');
        }
    }
    if (products.length === 0) {
        return (
            <div className={`${styles.reset} ${styles.rotate}`} onClick={handleClick} />
        )
    }

    return (
        <div className={styles.reset} onClick={handleClick} />
    )
}