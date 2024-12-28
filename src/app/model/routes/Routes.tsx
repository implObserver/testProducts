import { MainLayout } from "@/layouts/default";
import { CreatorPage } from "@/pages/creator";
import { EditorPage } from "@/pages/editor";
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
                element: <CreatorPage />,
            },
            {
                path: "/edit",
                element: <EditorPage />,
            },
            {
                path: "/favorites",
                element: <FavoritesPage />,
            },
        ],
    },
];