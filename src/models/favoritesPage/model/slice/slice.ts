import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const favoritesStatusSlice = createSlice({
    name: 'favorites_status',
    initialState,
    reducers: {
        resetState: (state) => {
            return initialState;
        },
        open: (state: FavoritesState) => {
            state.isOpen = true;
        },
        close: (state: FavoritesState) => {
            state.isOpen = false;
        },
        toggle: (state: FavoritesState) => {
            state.isOpen = !state.isOpen;
        },
    },
})

export const favoritesStatusActions = favoritesStatusSlice.actions;
export const favoritesStatusReducer = favoritesStatusSlice.reducer;