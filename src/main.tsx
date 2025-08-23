import React from "react";
import ReactDOM from "react-dom/client";
import Browse from "./routes/browseBoardgames.tsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/errors.tsx";
import Boardgame from "./routes/boardgame.tsx";
import Home from "./routes/home.tsx";
import BaseLayout from "./layouts/base.tsx";
import {
  boardgameListLoader,
  boardgameLoader,
  categoryLoader,
  designerGraphLoader,
  designerLoader,
  familyLoader,
  mechanicLoader,
  search,
  trendingAndDecliningGamesLoader,
} from "./functions/apiService.tsx";
import SearchResults from "./routes/searchResults.tsx";
import Designer from "./routes/designer.tsx";
import DesignerGraph from "./routes/designer_graph.tsx";
import Category from "./routes/category.tsx";
import Mechanic from "./routes/mechanic.tsx";
import Family from "./routes/family.tsx";

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
        loader: trendingAndDecliningGamesLoader
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
        path: "/network/designers",
        element: <DesignerGraph />,
        loader: designerGraphLoader,
      },
      {
        path: "/designer/:designerId",
        element: <Designer />,
        loader: designerLoader,
      },
      {
        path: "/category/:categoryId",
        element: <Category />,
        loader: categoryLoader,
      },
      {
        path: "/mechanic/:mechanicId",
        element: <Mechanic />,
        loader: mechanicLoader,
      },
      {
        path: "/family/:familyId",
        element: <Family />,
        loader: familyLoader,
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
