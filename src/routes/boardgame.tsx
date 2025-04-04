import type {components} from "../apischema";
import {useLoaderData, useNavigation} from "react-router-dom";
import BoardgameStatistics from "../components/boardgameStatistics"
import imageResolver from "../functions/imageResolver.tsx";
import {useState} from "react";

type BoardgameWithHistoricalData = components["schemas"]["BoardgameWithHistoricalData"];

function Boardgame() {
    const boardgame = useLoaderData() as BoardgameWithHistoricalData;
    const navigation = useNavigation();

    const [loadPrediction, setLoadPrediction] = useState(false);

    const handleLoadPrediction = () => {
        setLoadPrediction(prev => !prev); // Toggle to trigger the effect in child
    };

    if (navigation.state === "loading") {
        return <span className="loading loading-dots loading-md text-primary"></span>
    }

    return (
        <div>
            <title>{boardgame.name}</title>

            <div className="flex flex-wrap md:flex-nowrap">
                <div className="basis-1/3 flex-shrink-0">
                    <img className="max-w-64 pl-4 object-contain" src={imageResolver(boardgame.image_url)}
                         alt="Boardgame cover"/>

                    <button className="btn btn-primary" onClick={handleLoadPrediction}>Load Prediction</button>

                    <BoardgameStatistics boardgame={boardgame} loadPrediction={loadPrediction}/>
                </div>

                <div className="basis-2/3 flex-grow min-w-0">
                    <div className="flex gap-4">
                    <h1 className="text-3xl">
                            {boardgame.name} <span className="text-sm font-bold">({boardgame.year_published})</span>
                        </h1>

                        <a href={"https://boardgamegeek.com/boardgame/" + boardgame.bgg_id}
                           target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" width="80" height="38" viewBox="0 0 80 38">
                                <g fill="none" fillRule="evenodd">
                                    <polygon fill="#FF5100"
                                             points="24.87 7.01 21.107 8.035 24.792 0 .9 8.794 2.206 19.327 0 21.454 6.577 37.93 20.558 32.779 25.418 21.37 23.331 19.358"/>
                                </g>
                            </svg>
                        </a>
                    </div>

                    <article className="prose whitespace-pre-wrap">
                        <p>{boardgame.description}</p>
                    </article>
                </div>
            </div>
        </div>
    )
}

export default Boardgame;
