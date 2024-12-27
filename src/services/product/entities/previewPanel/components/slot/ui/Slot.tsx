import styles from './styles/Slot.module.css'

export const Slot = ({ url }) => {
    return (
        <div className={styles.slot}
            style={{
                backgroundImage: `url(${url})`,
            }}
        />
    )
}