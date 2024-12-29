import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";

const searchInputSlice = createSlice({
    name: 'search_input',
    initialState,
    reducers: {
        resetState: (state) => {
            return initialState;
        },
        setRequest: (state: SearchInputState, action: PayloadAction<string>) => {
            state.request = action.payload;
        },
    },
})

export const searchInputActions = searchInputSlice.actions;
export const searchInputReducer = searchInputSlice.reducer;