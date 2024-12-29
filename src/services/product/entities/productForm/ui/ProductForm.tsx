import { getCurrency, useNewProductContext } from "@/services/product/shared/lib";
import styles from './styles/ProductForm.module.css'
import { useSelector } from "react-redux";
import { selectCategories } from "@/models/product";
import { Line } from "@/common/shared/ui/line";
import { updateFunctions } from "../lib/helper/updateFunctions";

export const ProductForm = () => {
    const categories = useSelector(selectCategories).categories;
    const currency = getCurrency();
    const context = useNewProductContext();
    const data = context.getState().product;
    const text = context.getState().operation === 'create'
        ? 'Создать продукт'
        : 'Изменить продукт'

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    console.log(data)

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const newData = { ...data };

        switch (e.target.id) {
            case 'checkbox':
                updateFunctions.updateCheckbox(newData, e as React.ChangeEvent<HTMLInputElement>);
                break;
            case 'description':
                updateFunctions.updateDescription(newData, e);
                break;
            case 'category':
                updateFunctions.updateCategory(newData, categories, e);
                break;
            case 'currency':
                updateFunctions.updateCurrency(newData, e);
                break;
            case 'price':
                updateFunctions.updatePrice(newData, e);
                break;
            case 'discount':
                updateFunctions.updateDiscount(newData, e);
                break;
            case 'url1':
            case 'url2':
            case 'url3':
                updateFunctions.updateUrl(newData, e);
                break;
            default:
                newData[e.target.id] = e.target.value;
                break;
        }

        context.setState({
            ...context.getState(),
            product: newData,
        });
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form} action="">

            <label htmlFor="title">Title:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="title"
                name="title"
                type="string"
                value={data.title}
                placeholder="Имя продукта"
                required={true}
            >
            </input>

            <Line text={''}></Line>

            <label htmlFor="description">Description:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="description"
                name="description"
                type="string"
                value={data.description.description}
                placeholder="Описание продукта"
                required={true}
            >
            </input>

            <Line text={''}></Line>

            <label htmlFor="category">Category:</label>
            <select
                onChange={handle}
                className={styles.select}
                id="category"
                name="category"
                required={true}
                defaultValue={data.category.name}
            >
                <option className={styles.option} value="">--Выберите категорию--</option>
                {categories.map((category) => (
                    <option key={category.id} className={styles.option} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>

            <Line text={''}></Line>

            <label htmlFor="currency">Currency:</label>
            <select
                onChange={handle}
                className={styles.select}
                id="currency"
                name="currency"
                required={true}
                defaultValue={data.price.currency}
            >
                <option className={styles.option} value="">--Выберите валюту--</option>
                {currency.map((currency, index) => (
                    <option key={index} className={styles.option} value={currency}>
                        {currency}
                    </option>
                ))}
            </select>
            <Line text={''}></Line>

            <label htmlFor="price">Price:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="price"
                name="price"
                type="number"
                value={data.price.price}
                placeholder="Введите цену"
                min="0"
                step="0.01"
                required={true}
            >
            </input>
            <Line text={''}></Line>

            <label htmlFor="discount">Discount %:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="discount"
                name="discount"
                type="number"
                value={data.price.percents}
                placeholder="%"
                min="0"
            >
            </input>
            <Line text={''}></Line>

            <label htmlFor="url1">Preview URL 1:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="url1"
                name="url1"
                type="string"
                value={data.preview.urls[0]?.url ?? ''}
                placeholder="Ссылка на изображение"
            >
            </input>
            <Line text={''}></Line>

            <label htmlFor="url2">Preview URL 2:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="url2"
                name="url2"
                type="string"
                value={data.preview.urls[1]?.url ?? ''}
                placeholder="Ссылка на изображение"
            >
            </input>
            <Line text={''}></Line>

            <label htmlFor="url3">Preview URL 3:</label>
            <input
                onChange={handle}
                className={styles.input}
                id="url3"
                name="url3"
                type="string"
                value={data.preview.urls[2]?.url ?? ''}
                placeholder="Ссылка на изображение"
            >
            </input>

            <button className={styles.button} type="submit">{text}</button>
        </form>
    )
}