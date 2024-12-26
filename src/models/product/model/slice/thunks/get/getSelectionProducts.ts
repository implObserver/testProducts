import { GetService } from "@/models/product/api";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getSelectionProducts = createAsyncThunk(
    'services/add/pair/',
    async (thunkAPI) => {
        try {
            const response = await GetService.getSelectionProducts();
            console.log(response)
            const result: EmulateResponse = {
                id: 'getSelectionProducts',
                message: `Выборка продуктов успешно получена`,
                isError: false,
                data: {
                    status: response.status,
                    message: response.data
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