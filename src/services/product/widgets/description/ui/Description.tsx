import { useProductContext } from '@/services/product/shared/lib'
import styles from './styles/Description.module.css'

export const Description = () => {
    const context = useProductContext();
    return (
        <div className={styles.container}>
            <div className={styles.title}>{context.title}</div>
            <div className={styles.span}>Описание</div>
            <div className={styles.description}>{context.description.description}</div>
            <div className={styles.span}>Коротко о товаре</div>
            <div className={styles.category}>
                Категория: {context.category.name}
            </div>
        </div>
    )
}