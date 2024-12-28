import { Link } from 'react-router-dom'
import styles from './styles/LinkToEditProduct.module.css'
import { useProductContext } from '@/services/product/shared/lib'

export const LinkToEditProduct = () => {
    const product = useProductContext();
    return (
        <Link
            className={styles.container}
            to={'/edit'}
            state={product}>
            Редактировать
        </Link>
    )
}