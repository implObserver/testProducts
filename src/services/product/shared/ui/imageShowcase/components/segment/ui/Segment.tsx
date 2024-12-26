import { useSegmentContext } from '../lib/context/Context'
import styles from './styles/Segment.module.css'

export const Segment = () => {
    const context = useSegmentContext();
    const handleHover = () => {
        context.preview.setState(context.url);
    }

    return (
        <div className={styles.segment}
            onMouseEnter={handleHover}>
        </div>
    )
}