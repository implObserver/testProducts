import { MainLayout } from "@/layouts/default";
import { FavoritesPage } from "@/pages/favorites";
import { MainPage } from "@/pages/main";
import { ProductCart } from "@/services/product/gadgets/productCart";

export const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <MainPage />,
            },
            {
                path: "/products",
                element: <MainPage />,
            },
            {
                path: "/products/:id",
                element: <ProductCart />,
            },
            {
                path: "/create",
                element: <div>create</div>,
            },
            {
                path: "/edit",
                element: <div>edit</div>,
            },
            {
                path: "/favorites",
                element: <FavoritesPage />,
            },
        ],
    },
];