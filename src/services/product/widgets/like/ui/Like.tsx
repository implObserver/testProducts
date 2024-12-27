import { AddToFavorites } from "@/services/product/features/addToFavorites"
import { memo } from "react"

export const Like = memo(() => {
    return (
        <div>
            <AddToFavorites />
        </div>
    )
})