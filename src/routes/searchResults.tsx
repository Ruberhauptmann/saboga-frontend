import { Link, useLoaderData } from "react-router-dom";
import type { components } from "../apischema";

type SearchResult = components["schemas"]["SearchResult"];

export default function SearchResults() {
  const { data } = useLoaderData();

  return (
    <div className="space-y-4">
      {data.length === 0 ? (
        <p>No results found.</p>
      ) : (
        data.map((game: SearchResult) => (
          <div key={game.bgg_id} className="border p-4 rounded">
            <Link
              to={`/boardgame/${game.bgg_id}`}
              className="text-lg font-semibold"
            >
              {game.name}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
