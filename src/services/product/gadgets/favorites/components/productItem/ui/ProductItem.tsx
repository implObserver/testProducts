import { Like } from "@/services/product/widgets/like"
import { Options } from "@/services/product/widgets/options"
import { Product } from "@/services/product/widgets/product"
import styles from './styles/ProductItem.module.css'

export const ProductItem = () => {
    return (
        <div className={styles.product}>
            <div className={styles.cart}>
                <Product />
            </div>
            <div className={styles.like}>
                <Like />
            </div>
            <div className={styles.options}>
                <Options />
            </div>
        </div>
    )
}