
import { Products, ProductsContext } from '@/services/product/gadgets/products'
import styles from './styles/Favorites.module.css'
import { useSelector } from 'react-redux';
import { selectProducts } from '@/models/product';
import { Favorites } from '@/services/product/gadgets/favorites';

export const FavoritesPage = () => {
    return (
        <div className={styles.page}>
            <Favorites></Favorites>
        </div>
    )
}