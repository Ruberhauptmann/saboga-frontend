import React from "react";
import ReactDOM from "react-dom/client";
import Browse from "./routes/browse.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/errors.tsx";
import Boardgame from "./routes/boardgame.tsx";
import Home from "./routes/home.tsx";
import BaseLayout from "./layouts/base.tsx";
import {
  boardgameListLoader,
  boardgameLoader,
  designerGraphLoader,
  search,
} from "./functions/apiService.tsx";
import SearchResults from "./routes/searchResults.tsx";
import Designer from "./routes/designers.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: (
      <BaseLayout>
        <ErrorPage />
      </BaseLayout>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/browse/boardgame/",
        element: <Browse />,
        loader: boardgameListLoader,
      },
      {
        path: "/browse/boardgame/",
        element: <Browse />,
        loader: boardgameListLoader,
      },
      {
        path: "/browse/boardgame/page/:pageId",
        element: <Browse />,
        loader: boardgameListLoader,
      },
      {
        path: "/boardgame/:boardgameId",
        element: <Boardgame />,
        loader: boardgameLoader,
      },
      {
        path: "/designers",
        element: <Designer />,
        loader: designerGraphLoader,
      },
      {
        path: "/search",
        element: <SearchResults />,
        loader: search,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
