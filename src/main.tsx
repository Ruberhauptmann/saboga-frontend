import React from 'react'
import ReactDOM from 'react-dom/client'
import Browse from "./routes/browse.tsx";
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/404.tsx";
import Boardgame from "./routes/boardgame.tsx";
import BaseLayout from "./layouts/base.tsx";
import { boardgameListLoader, boardgameLoader } from "./functions/apiService.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/browse/boardgame/",
                element: <Browse />,
                loader: boardgameListLoader
            },
            {
                path: "/browse/boardgame/page/:pageId",
                element: <Browse />,
                loader: boardgameListLoader
            },
            {
                path: "boardgame/:boardgameId",
                element: <Boardgame />,
                loader: boardgameLoader
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
