import { DeleteProduct } from "@/services/product/features/deleteProduct"
import styles from './styles/Container.module.css'
import { LinkToEditProduct } from "@/services/product/features/linkToEditProduct"

export const Container = () => {
    return (
        <div className={styles.container}>
            <LinkToEditProduct></LinkToEditProduct>
            <DeleteProduct></DeleteProduct>
        </div>
    )
} 