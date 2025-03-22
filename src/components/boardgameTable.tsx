import type { components } from "../apischema.d.ts";
import {Link, NavLink} from "react-router-dom";
import imageResolver from "../functions/imageResolver.tsx";

type BoardgameComparison = components["schemas"]["BoardgameComparison"];


function BoardgameRow(boardgame: BoardgameComparison) {
    let bgg_rank_change = <span></span>;
    if (boardgame.bgg_rank_change != 0) {
        bgg_rank_change = <span>(<span className={boardgame.bgg_rank_change < 0 ? "text-error" : "text-success"}>{boardgame.bgg_rank_change < 0 ? "" : "+"}{(boardgame.bgg_rank_change).toString()}</span>)</span>;
    }
    let bgg_geek_rating_change = <span></span>;
    if (Number(boardgame.bgg_geek_rating_change.toFixed(3)) != 0) {
        bgg_geek_rating_change = <span>(<span className={boardgame.bgg_geek_rating_change < 0 ? "text-error" : "text-success"}>{boardgame.bgg_geek_rating_change < 0 ? "" : "+"}{boardgame.bgg_geek_rating_change.toFixed(3)}</span>)</span>;
    }
    let bgg_average_rating_change = <span></span>;
    if (Number(boardgame.bgg_average_rating_change.toFixed(2)) != 0) {
        bgg_average_rating_change = <span>(<span className={boardgame.bgg_average_rating_change < 0 ? "text-error" : "text-success"}>{boardgame.bgg_average_rating_change < 0 ? "" : "+"}{boardgame.bgg_average_rating_change.toFixed(2)}</span>)</span>;
    }

    return (
        <tr key={boardgame.bgg_id}>
            <td>
                {boardgame.bgg_rank} {bgg_rank_change}
            </td>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img className="object-cover" src={imageResolver(boardgame.thumbnail_url)} alt="Boardgame cover"/>
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <Link to={`/boardgame/${boardgame.bgg_id}`}>{boardgame.name}</Link>
            </td>
            <td>
                {boardgame.bgg_geek_rating?.toFixed(3).toString()} {bgg_geek_rating_change}
            </td>
            <td>
                {boardgame.bgg_average_rating?.toFixed(2)} {bgg_average_rating_change}
            </td>
        </tr>
    )
}


function BoardgameTable({ boardgames, links }: {boardgames: BoardgameComparison[], links: Map<string,Map<string, string>> }) {
    return (
        <div className="max-w-full overflow-x-auto">
            <div className="flex justify-end">
                <NavLink className="pr-1 link"
                         to={`/browse/boardgame/page/${links.get('first')?.get('page')}`}>{links.get('first')?.get('page')}</NavLink>
                <NavLink className="pr-1 link"
                         to={`/browse/boardgame/page/${links.get('prev')?.get('page')}`}>{links.get('prev')?.get('rel')}</NavLink>
                <NavLink className="link"
                         to={`/browse/boardgame/page/${links.get('next')?.get('page')}`}>{links.get('next')?.get('rel')}</NavLink>
                <NavLink className="pl-1 link"
                         to={`/browse/boardgame/page/${links.get('last')?.get('page')}`}>{links.get('last')?.get('page')}</NavLink>
            </div>
            <div className="max-h-screen overflow-y-auto">
                <table className="table table-zebra table-pin-rows w-full">
                    <thead>
                    <tr>
                        <th>Rank</th>
                        <th></th>
                        <th>Title</th>
                        <th>Geek Rating</th>
                        <th>Average Rating</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boardgames!.map(boardgame => (
                        <BoardgameRow {...boardgame} />
                    ))}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default BoardgameTable;
