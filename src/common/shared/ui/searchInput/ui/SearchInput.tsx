import { useSelector } from 'react-redux'
import styles from './styles/SearchInput.module.css'
import { selectSearchInput } from '@/models/searchProductInput'

export const SearchInput = ({ placeholder }) => {
    const request = useSelector(selectSearchInput).request;
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();
    };

    return (
        <div className={styles.input}>
            <input
                onChange={handleChange}
                placeholder={placeholder}
                type="text"
                value={request}
            />
        </div>
    )
}