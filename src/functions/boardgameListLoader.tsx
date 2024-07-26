import client from "../client/fetchclient.tsx";
import parseLinkHeader from "./parseLinkHeader.tsx";
import {type Params} from "react-router-dom";


export const boardgameListLoader = async ({ params }: { params: Params<"pageId"> }) => {
    let pageId = Number(params.pageId)
    if (isNaN(pageId)) {
        pageId = 1;
    }
    const {data, error, response} = await client.GET(
        "/boardgames/", {
            params: {
                query: { page: pageId, per_page: 100 }
            }
        }
    );

    const links = parseLinkHeader(response.headers.get('link')!)

    if (error) {
        console.error('Error', error);

        return [];
    }
    return {data, links};
}
