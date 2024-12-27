import { DescriptionEntity } from '@/services/product/entities/description'
import { PreviewEntity } from '@/services/product/entities/preview'
import { PriceEntity } from '@/services/product/entities/price'
import styles from './styles/Product.module.css'
import { useState } from 'react'

export const Product = () => {

    return (
        <div className={styles.product}>
            <div>
                <PreviewEntity />
                <DescriptionEntity></DescriptionEntity>
                <PriceEntity></PriceEntity>
            </div>
        </div>
    )
}