import { favoritesPaginationReducer } from '@/models/favorite';
import { favoritesStatusReducer } from '@/models/favoritesPage';
import { categoriesReducer, productsPaginationReducer, selectionProductsReducer } from '@/models/product';
import { searchInputReducer } from '@/models/searchProductInput';
import { statusesReducer } from '@/services/notifications/features/notificationDistributor';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  statuses: statusesReducer,
  selectionProducts: selectionProductsReducer,
  productsPagination: productsPaginationReducer,
  favoritesPagination: favoritesPaginationReducer,
  favoritesStatus: favoritesStatusReducer,
  categories: categoriesReducer,
  searchInput: searchInputReducer,
})

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispath = typeof store.dispatch;