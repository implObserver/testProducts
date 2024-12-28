import { PriceEntity } from '@/services/product/entities/price'
import styles from './styles/PurchaseInfoPanel.module.css'
import { Button } from '@/common/shared/ui/button'

export const PurchaseInfoPanel = () => {

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        if (confirm('Упс! Это не настоящий магазин, но спасибо за покупку ;)')) {
           
        } else {
            
        }
    }

    return (
        <div className={styles.container}>
            <PriceEntity />
            <div className={styles.buttons}>
                <div onClick={handleClick} className={styles.buy}>
                    <Button name={'Купить сейчас'}></Button>
                </div>
                <div onClick={handleClick} className={styles.card}>
                    <Button name={'В корзину'}></Button>
                </div>
            </div>
        </div>
    )
}