import type {components} from "../apischema";
import {useLoaderData, useNavigation} from "react-router-dom";
import BoardgameStatistics from "../components/boardgameStatistics"
import imageResolver from "../functions/imageResolver.tsx";

type BoardgameWithHistoricalData = components["schemas"]["BoardgameWithHistoricalData"];

function Boardgame() {
    const boardgame = useLoaderData() as BoardgameWithHistoricalData;
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <span className="loading loading-dots loading-md text-primary"></span>
    }

    return (
        <div>
            <h1 className="text-2xl">{boardgame.name}</h1>

            <p className="whitespace-pre-wrap">{boardgame.description}</p>

            <img className="h-48 w-96 object-cover" src={imageResolver(boardgame.image_url)} alt="Boardgame cover" />

            <div className="stats shadow">
                <div className="stat">
                    <div className="stat-title">Rank</div>
                    <div className="stat-value">{boardgame.bgg_rank}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Average Rating</div>
                    <div className="stat-value">{+boardgame.bgg_average_rating.toFixed(2)}</div>
                </div>
                <div className="stat">
                    <div className="stat-title">Geek Rating</div>
                    <div className="stat-value">{+boardgame.bgg_geek_rating.toFixed(2)}</div>
                </div>
            </div>

            <BoardgameStatistics {...boardgame}/>
        </div>
    )
}

export default Boardgame;
