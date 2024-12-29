import { GetService } from "@/models/product/api";
import { adaptEscuelajsProducts } from "@/services/product/shared/lib";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSelectionProducts = createAsyncThunk(
    'services/add/products/',
    async (thunkAPI) => {
        try {
            const response = await GetService.getSelectionProducts();
            const typedProducts = adaptEscuelajsProducts(response.data as EscuelajsProduct[]);
            const result: EmulateResponse = {
                id: 'getSelectionProducts',
                message: `Выборка продуктов успешно получена`,
                isError: false,
                data: {
                    status: response.status,
                    message: typedProducts as TypedProduct[]
                }
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'getSelectionProducts',
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