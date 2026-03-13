import { Link, useLoaderData } from "react-router-dom";
import type { components } from "../apischema";
import { SearchResult } from "../types/search_result";

export default function SearchResults() {
  const { data } = useLoaderData();

  return (
    <div className="space-y-4">
      {data.length === 0 ? (
        <p>No results found.</p>
      ) : (
        data.map((result: SearchResult) => (
          <div key={result.data.bgg_id} className="border p-4 rounded">
            <Link
              to={`/${result.type}/${result.data.bgg_id}`}
              className="text-lg font-semibold"
            >
              {result.data.name}
            </Link>
          </div>
        ))
      )}
    </div>
  );
}
