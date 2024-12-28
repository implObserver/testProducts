import { useSelector } from 'react-redux';
import styles from './styles/ProductEditor.module.css'
import { selectCategories } from '@/models/product';
import { NewProductContext } from '@/services/product/shared/lib';
import { DescriptionConstructor } from '@/services/product/widgets/descriptionConstructor';
import { useAppDispatch, useCustomState } from '@/common/shared/lib';
import { useEffect } from 'react';
import { getCategoriesProducts } from '@/models/product/model/slice/thunks/get/getCategories';
import { SmartPreviewConstructor } from '@/services/product/widgets/smartPreviewConstructor';
import { useLocation } from 'react-router-dom';

export const ProductEditor = () => {
    const product = useLocation().state;
    const constructor: Constructor = {
        operation: 'edit',
        product: product,
    }
    const currentProduct = useCustomState(constructor);
    const dispatch = useAppDispatch();
    const categories = useSelector(selectCategories).categories;

    useEffect(() => {
        if (categories.length <= 0) {
            console.log('load category')
            dispatch(getCategoriesProducts());
        }
    }, [dispatch, categories]);

    return (
        <div className={styles.product}>
            <NewProductContext.Provider value={currentProduct}>
                <SmartPreviewConstructor></SmartPreviewConstructor>
                <DescriptionConstructor></DescriptionConstructor>
            </NewProductContext.Provider>
        </div>
    )
}