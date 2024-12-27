import { useAppDispatch } from "@/common/shared/lib";
import { favoritesStatusActions, selectFavoritesStatus } from "@/models/favoritesPage";
import { Like, LikeContext } from "@/services/product/shared/ui/like";
import { useEffect } from "react";

import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export const OpenFavorites = () => {
    const dispatch = useAppDispatch();
    const status = useSelector(selectFavoritesStatus).isOpen;
    const location = useLocation().pathname;

    useEffect(() => {
        if (location !== '/favorites') {
            dispatch(favoritesStatusActions.close())
        }
    }, [location])
    const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        const element = e.target as HTMLElement;
        if (element.tagName === 'path') {
            dispatch(favoritesStatusActions.toggle())
        }
    }

    return (
        <div
            onClick={handleClick}>
            <Link to={status
                ? `/products`
                : `/favorites`}>
                <LikeContext.Provider value={status}>
                    <Like></Like>
                </LikeContext.Provider>
            </Link>
        </div>
    )
}