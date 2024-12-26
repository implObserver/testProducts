'use client';

import { useProductContext } from "@/services/product/shared/lib";
import { Like, LikeContext } from "@/services/product/shared/ui/like";
import { useState } from "react";

export const AddToFavorites = () => {
    const context = useProductContext();
    const [status, setStatus] = useState(false);

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'path') {
            setStatus(!status);
            
        }
    }

    return (
        <div
            onClick={handleClick}>
            <LikeContext.Provider value={status}>
                <Like></Like>
            </LikeContext.Provider>
        </div>
    )
}