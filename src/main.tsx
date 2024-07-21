import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/root.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/404.tsx";
import Boardgame from "./routes/boardgame.tsx";
import BaseLayout from "./layouts/base.tsx";
import {boardgameLoader} from "./functions/boardgameLoader.tsx";
import {boardgameListLoader} from "./functions/boardgameListLoader.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <BaseLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Root />,
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
