import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getSelectionProducts } from "../thunks/get/getSelectionProducts";

const productsPaginationSlice = createSlice({
    name: 'products_pagination',
    initialState,
    reducers: {
        resetState: () => {
            return initialState;
        },
        next: (state: Pagination) => {
            state.offset++;
        },
        prev: (state: Pagination) => {
            state.offset--;
        },
    },
})

export const productsPaginationActions = productsPaginationSlice.actions;
export const productsPaginationReducer = productsPaginationSlice.reducer;