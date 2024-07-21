import type {components} from "../apischema";
import {useLoaderData, useNavigation} from "react-router-dom";

type Boardgame = components["schemas"]["BoardgamePublic"];

function Boardgame() {
    const boardgame = useLoaderData() as Boardgame;
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <span className="loading loading-dots loading-md text-primary"></span>
    }

    return (
        <div>
            <h1 className="text-2xl">{boardgame.name}</h1>
        </div>
    )
}

export default Boardgame;

