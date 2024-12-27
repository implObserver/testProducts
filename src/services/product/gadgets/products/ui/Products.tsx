'use client';

import { useAppDispatch, useCustomState } from '@/common/shared/lib';
import styles from './styles/Products.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '@/models/product/model/slice/product/selectors';
import { getSelectionProducts, productsPaginationActions } from '@/models/product';
import { adaptEscuelajsProducts, getPagination, ProductContext } from '@/services/product/shared/lib';
import { Product } from '@/services/product/widgets/product';
import { Options } from '@/services/product/widgets/options';
import { Like } from '@/services/product/widgets/like';
import { SpinnerLoader } from '@/common/shared/ui/spinnerLoader';
import { selectProductsPagination } from '@/models/product/model/slice/pagination/selectors';

export const Products = () => {
    const dispatch = useAppDispatch();
    const untypedProducts = useSelector(selectProducts).products;
    const pagination = useSelector(selectProductsPagination);
    const totalPages = Math.ceil(untypedProducts.length / pagination.limit) - 1;
    const page = pagination.offset;
    //const typedProducts = adaptFakestoreProducts(untypedProducts).products;
    const typedProducts = adaptEscuelajsProducts(untypedProducts as EscuelajsProduct[]).products;
    const currentProducts = useCustomState(typedProducts);

    const next = () => {
        dispatch(productsPaginationActions.next())
    }

    const prev = () => {
        dispatch(productsPaginationActions.prev());
    }

    useEffect(() => {
        if (untypedProducts.length <= 0) {
            console.log('load')
            dispatch(getSelectionProducts());
        } else {
            const paginationProducts = getPagination(typedProducts, pagination);
            currentProducts.setState(paginationProducts);
        }
    }, [dispatch, untypedProducts, page]);

    const fill = () => {
        return currentProducts.getState().map((example) => (
            <div key={example.id} className={styles.product}>
                <ProductContext.Provider value={example}>
                    <div className={styles.cart}>
                        <Product />
                    </div>
                    <div className={styles.like}>
                        <Like />
                    </div>
                    <div className={styles.options}>
                        <Options />
                    </div>
                </ProductContext.Provider>
            </div>
        ));
    };
    console.log(`${page} - ${totalPages}`)
    if (typedProducts.length > 0) {
        return (
            <div className={styles.showcase__product}>
                <div className={styles.products}>
                    {fill()}
                </div>
                <div className={totalPages === 1
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
};