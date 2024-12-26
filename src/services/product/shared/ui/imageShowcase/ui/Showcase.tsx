import { Segment, SegmentContext } from "../components/segment";
import { useImageShowcaseContext } from "../lib/context/Context"
import styles from './styles/ShowCase.module.css'

export const Showcase = () => {
    const context = useImageShowcaseContext();
    const urls = context.urls;

    const handleLeave = () => {
        context.preview.setState(urls[0]);
    }

    const fill = () => {
        return urls.map((url, index) => {
            const segmentContext: SegmentContextType = {
                url,
                preview: context.preview
            }

            return (
                <SegmentContext.Provider key={index} value={segmentContext}>
                    <Segment></Segment>
                </SegmentContext.Provider>
            )
        })
    }

    return (
        <div
            className={styles.showcase}
            onMouseLeave={handleLeave}
        >
            {fill()}
        </div>
    )
}