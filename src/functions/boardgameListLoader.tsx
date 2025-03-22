import client from "../client/fetchclient.tsx";
import parseLinkHeader from "./parseLinkHeader.tsx";
import {type Params} from "react-router-dom";

export const boardgameListLoader = async ({ request, params }: { request: Request, params: Params<"pageId"> }) => {
    const url = new URL(request.url);
    const compare_to = url.searchParams.get("startDate");
    const date = url.searchParams.get("endDate");

    const queryParams: Record<string, string | number> = { };
    if (params.pageId) {
        queryParams.page = Number(params.pageId);
    }
    if (compare_to) {
        queryParams.compare_to = compare_to;
    }
    if (date) {
        queryParams.date = date;
    }

    const {data, error, response} = await client.GET(
        "/boardgames/", {
            params: {
                query: queryParams,
            }
        }
    );

    const links = parseLinkHeader(response.headers.get('link')!);

    if (error) {
        console.error('Error', error);
        return [];
    }
    return {data, links};
};

