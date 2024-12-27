import { useState } from "react";
import styles from './styles/ZoomPreview.module.css'
import { useProductContext } from "@/services/product/shared/lib";
import { useZoomPreviewContext } from "../lib/context/Context";

export const ZoomPreview = () => {
    const [hoverData, setHoverData] = useState({ x: 0, y: 0, isHovered: false });
    const context = useProductContext();
    const url = useZoomPreviewContext().getState();
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;
        setHoverData({
            x,
            y,
            isHovered: true,
        });
    };

    const handleMouseLeave = () => {
        setHoverData({ x: 0, y: 0, isHovered: false });
    };

    return (
        <div
            className={styles.zoomContainer}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <div
                className={styles.preview}
                style={{
                    backgroundImage: `url(${url})`,
                    backgroundPosition: `${hoverData.x}% ${hoverData.y}%`,
                    backgroundSize: hoverData.isHovered ? '200%' : '100%',
                }}
            />
        </div>
    );
};