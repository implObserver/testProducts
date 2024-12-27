import { Title } from "@/common/entities/title"
import styles from './styles/SecondSectionOfHeader.module.css'
import { ResetStore } from "@/services/product/features/resetStore"

export const SecondSectionOfHeader = () => {
    return (
        <div className={styles.title}>
            <Title />
            <ResetStore />
        </div>
    )
}