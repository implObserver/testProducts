import { Link } from 'react-router-dom'
import styles from './styles/LinkToHome.module.css'

export const LinkToHome = () => {
    return (
        <Link className={styles.container} to={'/products'}>

        </Link>
    )
}