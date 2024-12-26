import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getSelectionProducts } from "./thunks/get/getSelectionProducts";

const selectionProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        const pendingHandler = (state: Products) => {

        };

        const errorHandler = (state: Products) => {

        }

        const downloadSelectionProducts = (state: Products, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {

            } else {
                state.products = action.payload.data.message;
            }
        }
        const asyncActions = [
            { action: getSelectionProducts, handler: downloadSelectionProducts },
        ];

        asyncActions.forEach(({ action, handler }) => {
            builder
                .addCase(action.pending, pendingHandler)
                .addCase(action.fulfilled, (state, action) => handler(state, action))
                .addCase(action.rejected, errorHandler);
        });
    },
})

export const selectionProductsActions = selectionProductsSlice.actions;
export const selectionProductsReducer = selectionProductsSlice.reducer;