import { useAppDispatch, useCustomState } from '@/common/shared/lib';
import styles from './styles/Favorites.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '@/models/product';
import { getPagination, ProductContext } from '@/services/product/shared/lib';
import { Product } from '@/services/product/widgets/product';
import { Options } from '@/services/product/widgets/options';
import { Like } from '@/services/product/widgets/like';
import { favoritesPaginationActions, selectFavoritesPagination } from '@/models/favorite';

export const Favorites = () => {
    const dispatch = useAppDispatch();
    const products = useSelector(selectProducts).products;
    const favorites = products.filter(product => product.isFavorite)
    const pagination = useSelector(selectFavoritesPagination);
    const totalPages = Math.ceil(favorites.length / pagination.limit) - 1;
    const page = pagination.offset;
    const currentProducts = useCustomState(favorites);
    console.log(totalPages)

    const next = () => {
        dispatch(favoritesPaginationActions.next())
    }

    const prev = () => {
        dispatch(favoritesPaginationActions.prev());
    }

    useEffect(() => {
        const paginationProducts = getPagination(favorites, pagination);
        currentProducts.setState(paginationProducts);
    }, [dispatch, products, page]);

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
    if (favorites.length > 0) {
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
            {`Не добавлено ни одного товара :(`}
        </div>
    );
};