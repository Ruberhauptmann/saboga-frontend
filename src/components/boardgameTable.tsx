import type { components } from "../apischema.d.ts";
import {Link, NavLink} from "react-router-dom";


// Schema Obj
type Boardgame = components["schemas"]["BoardgamePublic"];

function BoardgameRow(boardgame: Boardgame) {

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
            <th>
                {boardgame.bgg_rank} {bgg_rank_change}
            </th>
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


function BoardgameTable({ boardgames, links }: {boardgames: Boardgame[], links: Map<string,Map<string, string>> }) {
    return (
        <div>
            <div className="flex justify-end">
                <NavLink className="pr-1 link" to={`/browse/boardgame/page/${links.get('first')?.get('page')}`}>{links.get('first')?.get('page')}</NavLink>
                <NavLink className="pr-1 link" to={`/browse/boardgame/page/${links.get('prev')?.get('page')}`}>{links.get('prev')?.get('rel')}</NavLink>
                <NavLink className="link" to={`/browse/boardgame/page/${links.get('next')?.get('page')}`}>{links.get('next')?.get('rel')}</NavLink>
                <NavLink className="pl-1 link" to={`/browse/boardgame/page/${links.get('last')?.get('page')}`}>{links.get('last')?.get('page')}</NavLink>
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                <thead>
                    <tr>
                        <th>Rank</th>
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
