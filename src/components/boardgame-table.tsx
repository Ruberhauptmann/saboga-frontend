import type { components } from "../apischema.d.ts";
import { useLoaderData, useNavigation, Link } from "react-router-dom";


// Schema Obj
type Boardgame = components["schemas"]["BoardgamePublic"];

function BoardgameTable() {
    const boardgames = useLoaderData() as Boardgame[];
    const navigation = useNavigation();

    if (navigation.state === "loading") {
        return <span className="loading loading-dots loading-md text-primary"></span>
    }

    return (
        <div>
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
                        <tr key={boardgame.bgg_id}>
                            <th>{boardgame.bgg_rank}</th>
                            <td>
                                <Link to={`boardgame/${boardgame.bgg_id}`}>{boardgame.name}</Link>
                            </td>
                            <td>{boardgame.bgg_geek_rating?.toFixed(3)}</td>
                            <td>{boardgame.bgg_average_rating?.toFixed(2)}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default BoardgameTable;
