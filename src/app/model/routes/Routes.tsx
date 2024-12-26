import { MainLayout } from "@/layouts/default";
import { MainPage } from "@/pages/main";

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
                element: <div>id</div>,
            },
            {
                path: "/create",
                element: <div>create</div>,
            },
            {
                path: "/edit",
                element: <div>edit</div>,
            },
        ],
    },
];