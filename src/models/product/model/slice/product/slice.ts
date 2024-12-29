import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./defaultState";
import { getSelectionProducts } from "../thunks/get/getSelectionProducts";
import { getPaginationProducts } from "../thunks/get/getPaginationProducts";

const selectionProductsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        resetState: (state: TypedProducts) => {
            return initialState
        },
        changeFavoriteStatus: (state: TypedProducts, action: PayloadAction<TypedProduct>) => {
            const { id, isFavorite } = action.payload;
            const updatedProduct = { ...action.payload, isFavorite: !isFavorite };
            const indexInProducts = state.products.findIndex((product) => product.id === id);
            if (indexInProducts !== -1) {
                state.products.splice(indexInProducts, 1, updatedProduct);
            }

            const indexInPaginated = state.paginated.findIndex((product) => product.id === id);
            if (indexInPaginated !== -1) {
                state.paginated.splice(indexInPaginated, 1, updatedProduct);
            }

            const indexInFavoritesPaginated = state.favoritesPaginated.findIndex((product) => product.id === id);
            if (indexInFavoritesPaginated !== -1) {
                state.favoritesPaginated.splice(indexInFavoritesPaginated, 1, updatedProduct);
            }

            const indexInRelative = state.relative.findIndex((product) => product.id === id);
            if (indexInRelative !== -1) {
                state.relative.splice(indexInRelative, 1, updatedProduct);
            }

            const indexInFavorites = state.favorites.findIndex((product) => product.id === id);
            if (indexInFavorites !== -1) {
                state.favorites.splice(indexInFavorites, 1, updatedProduct);
            }

            const indexInCategory = state.category.findIndex((product) => product.id === id);
            if (indexInCategory !== -1) {
                state.category.splice(indexInCategory, 1, updatedProduct);
            }
        },
        pagination: (state: TypedProducts, action: PayloadAction<Pagination>) => {
            const products = state.relative;
            const pagination = action.payload;
            const offsetOfProducts = pagination.limit * pagination.offset;
            state.paginated = products.slice(offsetOfProducts, offsetOfProducts + pagination.limit);
        },
        favoritesPagination: (state: TypedProducts, action: PayloadAction<Pagination>) => {
            const products = state.favorites;
            const pagination = action.payload;
            const offsetOfProducts = pagination.limit * pagination.offset;
            state.favoritesPaginated = products.slice(offsetOfProducts, offsetOfProducts + pagination.limit);
        },
        addProduct: (state: TypedProducts, action: PayloadAction<TypedProduct>) => {
            const product = action.payload;

            const indexInProducts = state.products.findIndex((p) => p.id === product.id);
            if (indexInProducts === -1) {
                state.products.push(product);
            }

            const indexInPaginated = state.paginated.findIndex((p) => p.id === product.id);
            if (indexInPaginated === -1) {
                const offset = state.paginated.length;
                if (offset < state.products.length) {
                    state.paginated.push(product);
                }
            }

            const indexInRelative = state.relative.findIndex((p) => p.id === product.id);
            if (indexInRelative === -1) {
                state.relative.push(product);
            }
        },
        editProduct: (state: TypedProducts, action: PayloadAction<TypedProduct>) => {
            const product = action.payload;

            const indexInProducts = state.products.findIndex((p) => p.id === product.id);
            if (indexInProducts >= 0) {
                state.products[indexInProducts] = product;
            }

            const indexInPaginated = state.paginated.findIndex((p) => p.id === product.id);
            if (indexInPaginated >= 0) {
                state.paginated[indexInPaginated] = product;
            }

            const indexInRelative = state.relative.findIndex((p) => p.id === product.id);
            if (indexInRelative >= 0) {
                state.relative[indexInRelative] = product;
            }

            const indexInCategory = state.category.findIndex((p) => p.id === product.id);
            if (indexInCategory >= 0) {
                state.category[indexInCategory] = product;
            }

            const indexInFavoritesPaginated = state.favoritesPaginated.findIndex((p) => p.id === product.id);
            if (indexInFavoritesPaginated >= 0) {
                state.favoritesPaginated[indexInFavoritesPaginated] = product;
            }

            const indexInFavorites = state.favorites.findIndex((p) => p.id === product.id);
            if (indexInFavorites >= 0) {
                state.favorites[indexInFavorites] = product;
            }
        },
        deleteProduct: (state: TypedProducts, action: PayloadAction<string>) => {
            const idsToRemove = action.payload;
            console.log(idsToRemove)
            state.paginated = state.paginated.filter(
                (product) => idsToRemove !== product.id
            );

            state.favoritesPaginated = state.favoritesPaginated.filter(
                (product) => idsToRemove !== product.id
            );

            state.products = state.products.filter(
                (product) => idsToRemove !== product.id
            );

            state.relative = state.relative.filter(
                (product) => idsToRemove !== product.id
            );

            state.category = state.category.filter(
                (product) => idsToRemove !== product.id
            );
        },
        setRelative: (state: TypedProducts, action: PayloadAction<TypedProduct[]>) => {
            state.relative = action.payload;
        },
        checkFavorites: (state: TypedProducts, action: PayloadAction<TypedProduct[]>) => {
            const favorites = state.relative.filter(product => product.isFavorite);
            state.favorites = favorites;
        },
        setCategory: (state: TypedProducts, action: PayloadAction<TypedProduct[]>) => {
            state.category = action.payload;
        },
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
                state.relative = action.payload.data.message;
                state.category = action.payload.data.message;
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