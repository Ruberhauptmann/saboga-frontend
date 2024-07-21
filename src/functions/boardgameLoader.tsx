import client from "../client/fetchclient.tsx";
import type { Params } from "react-router-dom";

export const boardgameLoader = async ({ params }: { params: Params<"boardgameId"> }) => {
    const {data, error} = await client.GET("/boardgames/{game_id}", {
        params: {
            path: { game_id: params.boardgameId! },
        },
    });

    if (error) {
        console.error('Error', error);

        return [];
    }
    return data;
};
