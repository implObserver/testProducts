import { useProductContext } from '@/services/product/shared/lib'
import styles from './styles/Description.module.css'

export const Description = () => {
    const context = useProductContext();
    console.log(context)
    return (
        <div className={styles.container}>
            <div>{context.title}</div>
            <div>{context.category.name}</div>
            <div>Описание товара:</div>
            <div>{context.description.description}</div>
        </div>
    )
}