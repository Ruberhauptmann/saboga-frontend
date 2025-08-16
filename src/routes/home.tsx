import { useLoaderData } from "react-router-dom";
import { components } from "../apischema";


type BoardgameSingle = components["schemas"]["BoardgameSingle"];
type BoardgamesLoaderData = {
  trending: BoardgameSingle[];
  declining: BoardgameSingle[];
};

export default function Home() {
    const { trending, declining } = useLoaderData() as BoardgamesLoaderData;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-xl">Trending</p>
        <ul>
          {trending.map(game => <li key={game.bgg_id}>{game.name}</li>)}
        </ul>
      </div>

      <div>
        <p className="text-xl">Declining</p>
        <ul>
          {declining.map(game => <li key={game.bgg_id}>{game.name}</li>)}
        </ul>
      </div>

    </div>
  );
}