import { Logo } from '@/common/entities/logo'
import styles from './styles/FirstSectionOfHeader.module.css'
import { Link } from 'react-router-dom'

export const FirstSectionOfHeader = () => {
    return (
        <div className={styles.header_section_first}>
            <Link to='/products' className={styles.link}>
                <Logo></Logo>
            </Link>
        </div>
    )
}