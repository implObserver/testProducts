'use client';

import { useAppDispatch, useCustomState } from '@/common/shared/lib';
import styles from './styles/Products.module.css'
import { memo, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSelectionProducts, productsPaginationActions, selectProducts } from '@/models/product';
import { getPagination, ProductContext } from '@/services/product/shared/lib';
import { SpinnerLoader } from '@/common/shared/ui/spinnerLoader';
import { selectProductsPagination } from '@/models/product/model/slice/pagination/selectors';
import { ProductItem } from '../components/productItem';

export const Products = memo(() => {
    const dispatch = useAppDispatch();
    const products = useSelector(selectProducts).products;
    const pagination = useSelector(selectProductsPagination);
    const totalPages = Math.ceil(products.length / pagination.limit) - 1;
    const page = pagination.offset;
    const currentProducts = useCustomState(products);

    const next = () => {
        dispatch(productsPaginationActions.next())
    }

    const prev = () => {
        dispatch(productsPaginationActions.prev());
    }

    useEffect(() => {
        if (products.length <= 0) {
            console.log('load')
            dispatch(getSelectionProducts());
        } else {
            const paginationProducts = getPagination(products, pagination);
            currentProducts.setState(paginationProducts);
        }
    }, [dispatch, products, page]);

    const fill = () => {
        return currentProducts.getState().map((example) => (
            <ProductContext.Provider key={example.id} value={example}>
                <ProductItem></ProductItem>
            </ProductContext.Provider>
        ));
    };
    console.log(`${page} - ${totalPages}`)
    if (products.length > 0) {
        return (
            <div className={styles.showcase__product}>
                <div className={styles.products}>
                    {fill()}
                </div>
                <div className={totalPages === 0
                    ? styles.block
                    : styles.pagination}>
                    <button className={page === 0
                        ? styles.block
                        : styles.pagination_btn}
                        onClick={prev}>
                        назад
                    </button>
                    <span className={styles.total_pages}>
                        {page}/{totalPages}
                    </span>
                    <button
                        className={page === totalPages
                            ? styles.block
                            : styles.pagination_btn}
                        onClick={next}>
                        вперед
                    </button>
                </div>
            </div>

        );
    }

    return (
        <div className={styles.loader}>
            Загрузка товаров...
            <SpinnerLoader />
        </div>
    );
});