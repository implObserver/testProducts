import { memo } from "react";
import { useDescriptionContext } from "../lib/context/Context"

export const Description = memo(() => {
    const context = useDescriptionContext();
    return <p>{context.description}</p>
})