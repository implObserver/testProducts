'use client';

import { useAppDispatch } from '@/common/shared/lib';
import styles from './styles/Products.module.css'
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectProducts } from '@/models/product/model/slice/selectors';
import { getSelectionProducts } from '@/models/product';
import { adaptEscuelajsProducts, ProductContext } from '@/services/product/shared/lib';
import { EntityPreviewContext } from '@/services/product/entities/preview';
import { Product } from '@/services/product/widgets/product';
import { AddToFavorites } from '@/services/product/features/addToFavorites';

export const Products = () => {
    const dispatch = useAppDispatch();
    const untupedProducts = useSelector(selectProducts).products;
    const typedProducts = adaptEscuelajsProducts(untupedProducts).products;
    const features: ProductFeatures = { like: <AddToFavorites /> };

    useEffect(() => {
        dispatch(getSelectionProducts());
    }, [])

    const fill = () => {
        return typedProducts.map((example: TypedProduct) => {
            return (
                <ProductContext.Provider key={example.id} value={example}>
                    <EntityPreviewContext.Provider value={features}>
                        <Product />
                    </EntityPreviewContext.Provider>
                </ProductContext.Provider>
            )
        })
    }

    return (
        <div className={styles.showcase__product}>
            {fill()}
        </div>
    );
};