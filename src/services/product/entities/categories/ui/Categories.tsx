import { categoriesActions, selectCategories } from "@/models/product"
import { useSelector } from "react-redux"
import styles from './styles/Categories.module.css'
import { useAppDispatch } from "@/common/shared/lib";

export const Categories = () => {
    const state = useSelector(selectCategories);
    const categories = state.categories;
    const active = state.active
        ? state.active.name
        : 'all';
    const dispatch = useAppDispatch();

    const handle = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const category = categories.find(category => category.name === e.target.value);
        if (category) {
            dispatch(categoriesActions.setActiveCategory(category));
        } else if (e.target.value === 'all') {
            dispatch(categoriesActions.setActiveCategory({
                id: 'all',
                name: 'all',
                image: '',
            }));
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.filter}></div>
            <select
                onChange={handle}
                className={styles.select}
                id="category"
                name="category"
                defaultValue={active}
                required={true}
            >
                <option value="all">Все товары</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    )
}