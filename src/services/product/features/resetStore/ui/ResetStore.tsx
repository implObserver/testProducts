import { persistor } from "@/app/model/store/Store";
import { useAppDispatch } from "@/common/shared/lib";
import { categoriesActions, productsPaginationActions, selectionProductsActions, selectProducts } from "@/models/product";
import styles from './styles/ResetStore.module.css'
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { searchInputActions } from "@/models/searchProductInput";
import { favoritesPaginationActions } from "@/models/favorite";

export const ResetStore = () => {
    const dispatch = useAppDispatch();
    const products = useSelector(selectProducts).products;
    const navigation = useNavigate();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (confirm('Внимание, это сбросит магазин и все изменения в начальное состояние, вы потеряете все созданные продукты')) {
            persistor.purge();
            dispatch(selectionProductsActions.resetState());
            dispatch(categoriesActions.resetState());
            dispatch(searchInputActions.resetState());
            dispatch(favoritesPaginationActions.resetState());
            dispatch(productsPaginationActions.resetState());
            navigation('/products')
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