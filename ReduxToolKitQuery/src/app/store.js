import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { getAllProducts } from './services/ApiSection';
export const store=configureStore({
    reducer:
    {
        [getAllProducts.reducerPath]: getAllProducts.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(getAllProducts.middleware),
});
setupListeners(store.dispatch)