import { useSelector } from 'react-redux';
import styles from './styles/ProductConstructor.module.css'
import { selectCategories } from '@/models/product';
import { getDefaultProduct, NewProductContext } from '@/services/product/shared/lib';
import { DescriptionConstructor } from '@/services/product/widgets/descriptionConstructor';
import { useAppDispatch, useCustomState } from '@/common/shared/lib';
import { useEffect } from 'react';
import { getCategoriesProducts } from '@/models/product/model/slice/thunks/get/getCategories';
import { SmartPreviewConstructor } from '@/services/product/widgets/smartPreviewConstructor';

export const ProductConstructor = () => {
    const defaultProduct: TypedProduct = getDefaultProduct();
    const constructor: Constructor = {
        operation: 'create',
        product: defaultProduct,
    }
    const newProduct = useCustomState(constructor);
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
            <NewProductContext.Provider value={newProduct}>
                <SmartPreviewConstructor></SmartPreviewConstructor>
                <DescriptionConstructor></DescriptionConstructor>
            </NewProductContext.Provider>
        </div>
    )
}