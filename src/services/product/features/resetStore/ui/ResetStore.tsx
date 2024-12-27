import { persistor } from "@/app/model/store/Store";
import { useAppDispatch } from "@/common/shared/lib";
import { Button } from "@/common/shared/ui/button";
import { productsPaginationActions, selectionProductsActions } from "@/models/product";
import styles from './styles/ResetStore.module.css'

export const ResetStore = () => {
    const dispatch = useAppDispatch();

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

    return (
        <div
            onClick={handleClick}>
            <div className={styles.button}>
                <Button name={'Reset Store'}></Button>
            </div>
        </div>
    )
}