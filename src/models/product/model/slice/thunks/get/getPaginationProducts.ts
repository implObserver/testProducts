import { GetService } from "@/models/product/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPaginationProducts = createAsyncThunk(
    'services/add/pagination_products/',
    async (pagination: Pagination, thunkAPI) => {
        try {
            const response = await GetService.getPaginationProducts(pagination);
            const result: EmulateResponse = {
                id: 'getPaginationProducts',
                message: `Страница с продуктами успешно получена`,
                isError: false,
                data: {
                    status: response.status,
                    message: response.data
                }
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'getPaginationProducts',
                message: `Произошла ошибка`,
                isError: true,
                data: {
                    status: error.status,
                    message: error.message,
                },
            }
            return result;
        }
    }
)