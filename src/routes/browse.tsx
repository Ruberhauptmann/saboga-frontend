import BoardgameTable from "../components/boardgameTable.tsx";
import {useLoaderData, useNavigation} from "react-router-dom";
import Boardgame from "./boardgame.tsx";

function Browse() {
    const {data: boardgames, links} = useLoaderData() as { data: Boardgame[], links: Map<string, Map<string, string>> }
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <span className="loading loading-dots loading-md text-primary"></span>
    }

    return (
        <BoardgameTable boardgames={boardgames} links={links} />
    )
}

export default Browse
