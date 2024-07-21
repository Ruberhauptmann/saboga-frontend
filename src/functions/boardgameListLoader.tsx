import client from "../client/fetchclient.tsx";


export const boardgameListLoader = async () => {
    const {data, error} = await client.GET("/boardgames/");

    if (error) {
        console.error('Error', error);

        return [];
    }
    return data;
}
