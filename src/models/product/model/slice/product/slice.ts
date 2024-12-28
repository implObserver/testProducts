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
        changeFavoriteStatus: (state: TypedProducts, action: PayloadAction<TypedProduct>) => {
            const { id, isFavorite } = action.payload;
            const updatedProduct = { ...action.payload, isFavorite: !isFavorite }
            const index = state.products.findIndex(product => product.id === id);
            state.products.splice(index, 1, updatedProduct);
        },
        addProduct: (state: TypedProducts, action: PayloadAction<TypedProduct>) => {
            const index = state.products.findIndex((product: TypedProduct) => product.id === action.payload.id);
            if (index === -1) {
                state.products.push(action.payload);
            }
        },
        deleteProduct: (state: TypedProducts, action: PayloadAction<number | string>) => {
            const index = state.products.findIndex((product: TypedProduct) => product.id === action.payload);
            state.products.splice(index, 1);
        }
    },
    extraReducers: (builder) => {
        const pendingHandler = (state: TypedProducts) => {

        };

        const errorHandler = (state: TypedProducts) => {

        }

        const downloadProducts = (state: TypedProducts, action: PayloadAction<EmulateResponse>) => {
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