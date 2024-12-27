'use client';

import { useAppDispatch } from "@/common/shared/lib";
import { selectionProductsActions } from "@/models/product";
import { useProductContext } from "@/services/product/shared/lib";
import { Like, LikeContext } from "@/services/product/shared/ui/like";

export const AddToFavorites = () => {
    const context = useProductContext();
    const dispatch = useAppDispatch();

    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'path') {
            dispatch(selectionProductsActions.changeFavoriteStatus(context))
        }
    }

    return (
        <div
            onClick={handleClick}>
            <LikeContext.Provider value={context.isFavorite}>
                <Like></Like>
            </LikeContext.Provider>
        </div>
    )
}