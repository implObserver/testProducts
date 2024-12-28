import { useNewProductContext } from '@/services/product/shared/lib'
import styles from './styles/DescriptionConstructor.module.css'
import { CreateProduct } from '@/services/product/features/createProduct';
import { EditProduct } from '@/services/product/features/editProduct';

export const DescriptionConstructor = () => {
    const context = useNewProductContext();
    const constructor = context.getState();
    console.log(constructor)
    return (
        <div className={styles.container}>
            {constructor.operation === 'create'
                ? <CreateProduct></CreateProduct>
                : <EditProduct></EditProduct>}
        </div>
    )
}