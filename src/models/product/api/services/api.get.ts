import { defaultQuery } from "@/lib/helpers/queries/defaultQuery"

export const GetService = {
    getSelectionProducts(): Promise<EscuelajsResponse> {
        return defaultQuery.get("/api/v1/products")
    },
}