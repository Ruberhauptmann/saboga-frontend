import type { components } from "../apischema.d.ts";
import { Link, NavLink, useLoaderData } from "react-router-dom";
import imageResolver from "../functions/imageResolver.tsx";

type BoardgameComparison = components["schemas"]["BoardgameComparison"];

function BoardgameRow({ boardgame }: { boardgame: BoardgameComparison }) {
  const rankChange = boardgame.bgg_rank_change ?? 0;
  const geekChange = boardgame.bgg_geek_rating_change ?? 0;
  const avgChange = boardgame.bgg_average_rating_change ?? 0;

  let bgg_rank_change = <span></span>;
  if (Number(rankChange) != 0) {
    bgg_rank_change = (
      <span>
        (
        <span className={rankChange < 0 ? "text-error" : "text-success"}>
          {rankChange < 0 ? "" : "+"}
          {rankChange}
        </span>
        )
      </span>
    );
  }
  let bgg_geek_rating_change = <span></span>;
  if (Number(geekChange.toFixed(3)) != 0) {
    bgg_geek_rating_change = (
      <span>
        (
        <span className={geekChange < 0 ? "text-error" : "text-success"}>
          {geekChange < 0 ? "" : "+"}
          {geekChange.toFixed(3)}
        </span>
        )
      </span>
    );
  }
  let bgg_average_rating_change = <span></span>;
  if (Number(avgChange.toFixed(2)) != 0) {
    bgg_average_rating_change = (
      <span>
        (
        <span className={avgChange < 0 ? "text-error" : "text-success"}>
          {avgChange < 0 ? "" : "+"}
          {avgChange.toFixed(2)}
        </span>
        )
      </span>
    );
  }

  return (
    <tr key={boardgame.bgg_id}>
      <td className="max-w-8">
        <a
          href={"https://boardgamegeek.com/boardgame/" + boardgame.bgg_id}
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="38"
            viewBox="0 0 30 38"
          >
            <g fill="none" fillRule="evenodd">
              <polygon
                fill="#FF5100"
                points="24.87 7.01 21.107 8.035 24.792 0 .9 8.794 2.206 19.327 0 21.454 6.577 37.93 20.558 32.779 25.418 21.37 23.331 19.358"
              />
            </g>
          </svg>
        </a>
      </td>
      <td className="max-w-18 text-center">
        {boardgame.bgg_rank} {bgg_rank_change}
      </td>
      <td>
        <div className="flex justify-center">
          <Link
            className="block md:h-20 md:w-20 h-10 w-10"
            to={`/boardgame/${boardgame.bgg_id}`}
          >
            <div className="avatar">
              <div className="mask mask-squircle">
                <img
                  className="object-cover"
                  src={imageResolver(boardgame.thumbnail_url)}
                  alt="Boardgame cover"
                />
              </div>
            </div>
          </Link>
        </div>
      </td>
      <td>
        <Link to={`/boardgame/${boardgame.bgg_id}`}>
          {boardgame.name} ({boardgame.year_published})
        </Link>
      </td>
      <td className="text-center">
        {boardgame.bgg_geek_rating?.toFixed(3).toString()}{" "}
        {bgg_geek_rating_change}
      </td>
      <td className="text-center">
        {boardgame.bgg_average_rating?.toFixed(2)} {bgg_average_rating_change}
      </td>
    </tr>
  );
}

function BoardgameTable() {
  const { data: boardgames, links } = useLoaderData() as {
    data: BoardgameComparison[];
    links: Map<string, Map<string, string>>;
  };

  return (
    <div className="max-w-full overflow-x-auto">
      <div className="flex justify-end">
        <NavLink
          className="pr-1 link"
          to={`/browse/boardgame/page/${links.get("first")?.get("page")}`}
        >
          {links.get("first")?.get("page")}
        </NavLink>
        <NavLink
          className="pr-1 link"
          to={`/browse/boardgame/page/${links.get("prev")?.get("page")}`}
        >
          {links.get("prev")?.get("rel")}
        </NavLink>
        <NavLink
          className="link"
          to={`/browse/boardgame/page/${links.get("next")?.get("page")}`}
        >
          {links.get("next")?.get("rel")}
        </NavLink>
        <NavLink
          className="pl-1 link"
          to={`/browse/boardgame/page/${links.get("last")?.get("page")}`}
        >
          {links.get("last")?.get("page")}
        </NavLink>
      </div>
      <div className="max-h-screen overflow-y-auto">
        <table className="table md:table-md table-xs table-zebra table-pin-rows w-full">
          <thead>
            <tr>
              <th className="max-w-6"></th>
              <th className="max-w-5 text-center">Rank</th>
              <th></th>
              <th className="text-center">Title</th>
              <th className="max-w-16 break-word text-wrap text-center">
                Geek Rating
              </th>
              <th className="max-w-16 break-word text-wrap text-center">
                Average Rating
              </th>
            </tr>
          </thead>
          <tbody>
            {boardgames!.map((boardgame) => (
              <BoardgameRow boardgame={boardgame} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BoardgameTable;
