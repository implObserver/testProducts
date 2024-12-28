import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getCategoriesProducts } from "../thunks/get/getCategories";

const categoriesSlice = createSlice({
    name: 'products_categories',
    initialState,
    reducers: {
        addCategory: (state: Categories, action: PayloadAction<Category>) => {
            state.categories.push(action.payload);
        },
    },
    extraReducers: (builder) => {
        const pendingHandler = (state: Categories) => {

        };

        const errorHandler = (state: Categories) => {

        }

        const downloadCategories = (state: Categories, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {

            } else {
                state.categories = action.payload.data.message;
            }
        }

        const asyncActions = [
            { action: getCategoriesProducts, handler: downloadCategories },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, pendingHandler)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, errorHandler);
        });
    },
})

export const categoriesActions = categoriesSlice.actions;
export const categoriesReducer = categoriesSlice.reducer;