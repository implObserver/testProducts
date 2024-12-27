import { defaultQuery } from "@/lib/helpers/queries/defaultQuery"
// /products
// /api/v1/products
export const GetService = {
    async getSelectionProducts(): Promise<EscuelajsResponse> {
        return await defaultQuery.get("/api/v1/products")
    },
    async getPaginationProducts(pagination: Pagination): Promise<EscuelajsResponse> {
        const escuelajsOffset = pagination.offset * pagination.limit;
        return await defaultQuery.get(`/api/v1/products?offset=${escuelajsOffset}&limit=${pagination.limit}`)
    },
}