import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getSelectionProducts } from "../thunks/get/getSelectionProducts";
import { getPaginationProducts } from "../thunks/get/getPaginationProducts";

const selectionProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetState: (state) => {
            return initialState;
        },
    },
    extraReducers: (builder) => {
        const pendingHandler = (state: UntypedProducts) => {

        };

        const errorHandler = (state: UntypedProducts) => {

        }

        const downloadProducts = (state: UntypedProducts, action: PayloadAction<EmulateResponse>) => {
            if (action.payload.isError) {

            } else {
                state.products = action.payload.data.message;
            }
        }

        const asyncActions = [
            { action: getSelectionProducts, handler: downloadProducts },
            { action: getPaginationProducts, handler: downloadProducts },
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