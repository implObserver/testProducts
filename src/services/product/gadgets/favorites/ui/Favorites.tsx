import { useAppDispatch } from '@/common/shared/lib';
import styles from './styles/Favorites.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectionProductsActions, selectProducts } from '@/models/product';
import { ProductContext } from '@/services/product/shared/lib';
import { ProductItem } from '../components/productItem';
import { SearchProducts } from '@/services/product/features/searchProducts';
import { SetCategory } from '@/services/product/features/setCategory';
import { favoritesPaginationActions, selectFavoritesPagination } from '@/models/favorite';


export const Favorites = () => {
    const dispatch = useAppDispatch();
    const state = useSelector(selectProducts);
    const products = state.products;
    const relative = state.relative;
    const paginated = state.favoritesPaginated;
    const category = state.category;
    const pagination = useSelector(selectFavoritesPagination);
    const { offset, limit } = pagination;
    const page = offset + 1;
    const favorites = state.favorites;
    const totalPages = Math.ceil(favorites.length / limit);

    useEffect(() => {
        dispatch(selectionProductsActions.checkFavorites());
        dispatch(selectionProductsActions.favoritesPagination(pagination));
        if (page > totalPages) {
            dispatch(favoritesPaginationActions.resetState());
        }
    }, [dispatch, products, relative, offset]);

    const renderProducts = () =>
        paginated.map((product) => {
            return (
                <ProductContext.Provider key={product.id} value={product}>
                    <ProductItem />
                </ProductContext.Provider>
            )
        });

    const handleNext = () => dispatch(favoritesPaginationActions.next());
    const handlePrev = () => dispatch(favoritesPaginationActions.prev());

    if (favorites.length === 0) {
        return (
            <div className={styles.showcase__product}>
                <div className={styles.panel}>
                    <div className={styles.search}>
                        <SearchProducts></SearchProducts>
                    </div>
                    <div className={styles.category}>
                        <SetCategory></SetCategory>
                    </div>
                </div>
                {`Нет любимых товаров в данной категории или по данному запросу :(`}
            </div>
        );
    }

    return (
        <div className={styles.showcase__product}>
            <div className={styles.panel}>
                <div className={styles.search}>
                    <SearchProducts></SearchProducts>
                </div>
                <div className={styles.category}>
                    <SetCategory></SetCategory>
                </div>
            </div>
            <div className={styles.products}>{renderProducts()}</div>
            {totalPages > 0 && (
                <div className={styles.pagination}>
                    <button
                        className={page === 1 ? styles.block : styles.pagination_btn}
                        onClick={handlePrev}
                        disabled={page === 1}
                    >
                        Назад
                    </button>
                    <span className={styles.total_pages}>
                        {page}/{totalPages}
                    </span>
                    <button
                        className={page === totalPages ? styles.block : styles.pagination_btn}
                        onClick={handleNext}
                        disabled={page === totalPages}
                    >
                        Вперед
                    </button>
                </div>
            )}
        </div>
    );
};