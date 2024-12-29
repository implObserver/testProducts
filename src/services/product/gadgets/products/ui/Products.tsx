import { useAppDispatch } from '@/common/shared/lib';
import styles from './styles/Products.module.css'
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSelectionProducts, productsPaginationActions, selectCategories, selectionProductsActions, selectProducts } from '@/models/product';
import { ProductContext } from '@/services/product/shared/lib';
import { SpinnerLoader } from '@/common/shared/ui/spinnerLoader';
import { selectProductsPagination } from '@/models/product/model/slice/pagination/selectors';
import { ProductItem } from '../components/productItem';
import { SearchProducts } from '@/services/product/features/searchProducts';
import { SetCategory } from '@/services/product/features/setCategory';
import { getCategoriesProducts } from '@/models/product/model/slice/thunks/get/getCategories';

export const Products = memo(() => {
    const dispatch = useAppDispatch();
    const state = useSelector(selectProducts);
    const categories = useSelector(selectCategories).categories;
    const products = state.products;
    const relative = state.relative;
    const category = state.category;
    const paginated = state.paginated;
    const pagination = useSelector(selectProductsPagination);
    const { offset, limit } = pagination;
    const page = offset + 1;
    const totalPages = Math.ceil(relative.length / limit);

    useEffect(() => {
        console.log(relative)
        if (products.length <= 0) {
            dispatch(getSelectionProducts());
        }
        if (page > totalPages) {
            dispatch(productsPaginationActions.resetState());
        }
        if (categories.length <= 0) {
            console.log('load category')
            dispatch(getCategoriesProducts());
        }
        dispatch(selectionProductsActions.pagination(pagination));
    }, [dispatch, products, relative, offset]);

    const renderProducts = () =>
        paginated.map((product) => (
            <ProductContext.Provider key={product.id} value={product}>
                <ProductItem />
            </ProductContext.Provider>
        ));

    const handleNext = () => dispatch(productsPaginationActions.next());
    const handlePrev = () => dispatch(productsPaginationActions.prev());

    if (products.length === 0) {
        return (
            <div className={styles.loader}>
                Загрузка товаров...
                <SpinnerLoader />
            </div>
        );
    }

    if (category.length === 0) {
        return (
            <div className={styles.showcase__product}>
                <div className={styles.panel}>
                    <SearchProducts></SearchProducts>
                    <SetCategory></SetCategory>
                </div>
                Нет товаров данной категории...
            </div>
        );
    }

    return (
        <div className={styles.showcase__product}>
            <div className={styles.panel}>
                <SearchProducts></SearchProducts>
                <SetCategory></SetCategory>
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
});