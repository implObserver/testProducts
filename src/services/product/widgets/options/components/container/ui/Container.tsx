import { DeleteProduct } from "@/services/product/features/deleteProduct"
import styles from './styles/Container.module.css'

export const Container = () => {
    return (
        <div className={styles.container}>
            <DeleteProduct></DeleteProduct>
        </div>
    )
} 