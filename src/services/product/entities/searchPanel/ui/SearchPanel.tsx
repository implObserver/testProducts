import { SearchInput } from '@/common/shared/ui/searchInput'
import styles from './styles/SearchPanel.module.css'

export const SearchPanel = () => {
    return (
        <div>
            <div className={styles.input}>
                <div className={styles.search}></div>
                <SearchInput placeholder={'Найти товары'}></SearchInput>
            </div>
        </div>
    )
}