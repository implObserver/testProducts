import { useLocation } from 'react-router-dom'
import styles from './styles/ProductCart.module.css'
import { useSelector } from 'react-redux';
import { selectProducts } from '@/models/product';
import { ProductContext } from '@/services/product/shared/lib';
import { SmartPreview } from '@/services/product/widgets/smartPreview';
import { Description } from '@/services/product/widgets/description';
import { PurchaseInfoPanel } from '@/services/product/widgets/purchaseInfoPanel';

export const ProductCart = () => {
    const location = useLocation();
    const pathname = location.pathname;
    const id = pathname.split('/').pop();
    const products = useSelector(selectProducts).products;

    if (id) {
        const product = products.find(product => product.id == id);
        return (
            <div className={styles.product}>
                <ProductContext.Provider value={product}>
                    <SmartPreview></SmartPreview>
                    <Description></Description>
                    <PurchaseInfoPanel></PurchaseInfoPanel>
                </ProductContext.Provider>
            </div>
        )
    }


    return (
        <div className={styles.product}>

        </div>
    )

}