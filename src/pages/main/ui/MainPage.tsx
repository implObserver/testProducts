
import { Products } from '@/services/product/gadgets/products'
import styles from './styles/MainPage.module.css'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <Products></Products>
        </div>
    )
}