import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./routes/errors.tsx";
import Boardgame from "./routes/boardgame.tsx";
import Home from "./routes/home.tsx";
import BaseLayout from "./layouts/base.tsx";
import {
  boardgameListLoader,
  boardgameLoader,
  categoriesListLoader,
  categoryLoader,
  designerListLoader,
  designerLoader,
  familiesListLoader,
  familyLoader,
  mechanicLoader,
  mechanicsListLoader,
  search,
  trendingAndDecliningGamesLoader,
} from "./functions/apiService.tsx";
import SearchResults from "./routes/searchResults.tsx";
import Designer from "./routes/designer.tsx";
import Category from "./routes/category.tsx";
import Mechanic from "./routes/mechanic.tsx";
import Family from "./routes/family.tsx";
import BrowseBoardgames from "./routes/browseBoardgames.tsx";
import BrowseDesigner from "./routes/browseDesigners.tsx";
import BrowseFamilies from "./routes/browseFamilies.tsx";
import BrowseCategories from "./routes/browseCategories.tsx";
import BrowseMechanics from "./routes/browseMechanics.tsx";

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
        loader: trendingAndDecliningGamesLoader,
      },
      {
        path: "/browse/boardgame/",
        element: <BrowseBoardgames />,
        loader: boardgameListLoader,
      },
      {
        path: "/browse/boardgame/page/:pageId",
        element: <BrowseBoardgames />,
        loader: boardgameListLoader,
      },
      {
        path: "/browse/categories/",
        element: <BrowseCategories />,
        loader: categoriesListLoader,
      },
      {
        path: "/browse/designers/",
        element: <BrowseDesigner />,
        loader: designerListLoader,
      },
      {
        path: "/browse/families/",
        element: <BrowseFamilies />,
        loader: familiesListLoader,
      },
      {
        path: "/browse/mechanics/",
        element: <BrowseMechanics />,
        loader: mechanicsListLoader,
      },
      {
        path: "/boardgame/:boardgameId",
        element: <Boardgame />,
        loader: boardgameLoader,
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
