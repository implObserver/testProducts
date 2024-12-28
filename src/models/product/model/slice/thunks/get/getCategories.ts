import { GetService } from "@/models/product/api";
import { adaptEscuelajsProducts } from "@/services/product/shared/lib";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoriesProducts = createAsyncThunk(
    'services/add/categories/',
    async (thunkAPI) => {
        try {
            const response = await GetService.getCategories();
            console.log(response)
            //const typedProducts = adaptFakestoreProducts(untypedProducts).products;
            const categories = response.data as Category[];
            const result: EmulateResponse = {
                id: 'getCategoriesProducts',
                message: `Категории успешно получены`,
                isError: false,
                data: {
                    status: response.status,
                    message: categories
                }
            }
            return result;
        } catch (error) {
            const result: EmulateResponse = {
                id: 'getCategoriesProducts',
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