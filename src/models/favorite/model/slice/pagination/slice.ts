import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const favoritesPaginationSlice = createSlice({
    name: 'favorites_pagination',
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

export const favoritesPaginationActions = favoritesPaginationSlice.actions;
export const favoritesPaginationReducer = favoritesPaginationSlice.reducer;