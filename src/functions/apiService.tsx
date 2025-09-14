import type { Params } from "react-router-dom";
import parseLinkHeader from "./parseLinkHeader.tsx";
import fetchFromApi from "./apiBaseService.tsx";

/**
 * Special loader for boardgame list (because it needs pagination + link headers)
 */
export const boardgameListLoader = async ({
  request,
  params,
}: {
  request: Request;
  params: Params<"pageId">;
}) => {
  const queryParams: Record<string, string | number> = {};
  if (params.pageId) queryParams.page = Number(params.pageId);

  const url = new URL(request.url);
  const compareDate = url.searchParams.get("compare_to");
  if (compareDate) queryParams.compare_to = compareDate;

  const { data, response } = await fetchFromApi("/boardgames/rank-history", {
    params: { query: queryParams },
  });

  const links = parseLinkHeader(response.headers.get("link")!);
  return { data, links };
};

/**
 * Boardgame details loader (with optional query params)
 */
export const boardgameLoader = async ({
  request,
  params,
}: {
  request: Request;
  params: Params<"boardgameId">;
}) => {
  const url = new URL(request.url);
  const queryParams: Record<string, string> = {};
  ["mode", "start_date", "end_date"].forEach((k) => {
    const v = url.searchParams.get(k);
    if (v) queryParams[k] = v;
  });

  const { data } = await fetchFromApi("/boardgames/{bgg_id}", {
    params: {
      path: { bgg_id: Number(params.boardgameId!) },
      query: queryParams,
    },
  });

  return data;
};

/**
 * Factory for simple entity loaders like designer/category/family/mechanic
 */
function createEntityLoader<
  T extends "designerId" | "categoryId" | "familyId" | "mechanicId",
>(
  endpoint:
    | `/designers/{bgg_id}`
    | `/categories/{bgg_id}`
    | `/families/{bgg_id}`
    | `/mechanics/{bgg_id}`,
  paramName: T,
) {
  return async ({ params }: { params: Params<T> }) => {
    const { data } = await fetchFromApi(endpoint, {
      params: { path: { bgg_id: Number(params[paramName]!) } },
    });
    return data;
  };
}

export const designerLoader = createEntityLoader(
  "/designers/{bgg_id}",
  "designerId",
);
export const categoryLoader = createEntityLoader(
  "/categories/{bgg_id}",
  "categoryId",
);
export const familyLoader = createEntityLoader(
  "/families/{bgg_id}",
  "familyId",
);
export const mechanicLoader = createEntityLoader(
  "/mechanics/{bgg_id}",
  "mechanicId",
);

/**
 * Forecast loader
 */
export const forecastLoader = async ({
  params,
  searchParams,
}: {
  params: Params<"boardgameId">;
  searchParams?: { start_date?: string; end_date?: string };
}) => {
  const { data } = await fetchFromApi("/boardgames/{bgg_id}/forecast", {
    params: {
      path: { bgg_id: Number(params.boardgameId!) },
      query: searchParams,
    },
  });
  return data;
};

/**
 * Designer list + graph
 */
export const designerListLoader = async () =>
  (await fetchFromApi("/designers")).data;

export const categoryGraphLoader = async () =>
  (await fetchFromApi("/categories/clusters")).data;

export const designerGraphLoader = async () =>
  (await fetchFromApi("/designers/clusters")).data;

export const familyGraphLoader = async () =>
  (await fetchFromApi("/families/clusters")).data;

export const mechanicGraphLoader = async () =>
  (await fetchFromApi("/mechanics/clusters")).data;

export const boardgameGraphLoader = async () =>
  (await fetchFromApi("/boardgames/clusters")).data;

/**
 * Trending / declining games (multi-request)
 */
export const trendingAndDecliningGamesLoader = async () => {
  const [trending, declining] = await Promise.all([
    fetchFromApi("/boardgames/trending"),
    fetchFromApi("/boardgames/declining"),
  ]);

  return {
    trending: trending.data,
    declining: declining.data,
  };
};

/**
 * Search loader
 */
export const search = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const queryParams = {
    query: url.searchParams.get("query") || "",
    ...(url.searchParams.get("limit")
      ? { limit: Number(url.searchParams.get("limit")!) }
      : {}),
  };

  const { data } = await fetchFromApi("/search", {
    params: { query: queryParams },
  });

  return { data };
};
