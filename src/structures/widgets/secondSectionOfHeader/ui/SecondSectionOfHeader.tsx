import { Title } from "@/common/entities/title"
import styles from './styles/SecondSectionOfHeader.module.css'
import { ResetStore } from "@/services/product/features/resetStore"
import { OpenFavorites } from "@/services/product/features/openFavorites/ui/OpenFavorites"

export const SecondSectionOfHeader = () => {
    return (
        <div className={styles.header}>
            <div className={styles.title}>
                <Title />
            </div>
            <div className={styles.tools}>
                <div className={styles.container}>
                    <OpenFavorites />
                </div>
                <div className={styles.container}>
                    <ResetStore />
                </div>
            </div>
        </div>
    )
}