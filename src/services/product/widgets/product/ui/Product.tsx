import { DescriptionEntity } from '@/services/product/entities/description'
import { PreviewEntity } from '@/services/product/entities/preview'
import { PriceEntity } from '@/services/product/entities/price'
import styles from './styles/Product.module.css'
import { useState } from 'react'

export const Product = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const handleImageLoad = () => {
        setIsLoading(false);
        setIsError(false);
    };

    const handleImageError = () => {
        setIsLoading(false);
        setIsError(true);
    };

    return (
        <div
            onLoad={handleImageLoad}
            onError={handleImageError}
            className={styles.product}>

            {isLoading && <p>Loading...</p>}
            <div className={isError ? styles.hidden : ''}>
                <PreviewEntity />
                <DescriptionEntity></DescriptionEntity>
                <PriceEntity></PriceEntity>
            </div>

        </div>
    )
}