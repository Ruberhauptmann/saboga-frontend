import { useLoaderData } from "react-router-dom";
import { components } from "../apischema";
import BoardgameTable from "../components/boardgameTable";


type BoardgameInList = components["schemas"]["BoardgameInList"];
type BoardgamesLoaderData = {
  trending: BoardgameInList[];
  declining: BoardgameInList[];
};

export default function Home() {
    const { trending, declining } = useLoaderData() as BoardgamesLoaderData;

  return (
    <div className="grid grid-cols-2 gap-4">
      <div>
        <p className="text-xl">Trending</p>

        <BoardgameTable boardgames={trending} />
      </div>

      <div>
        <p className="text-xl">Declining</p>

        <BoardgameTable boardgames={declining} />
      </div>

    </div>
  );
}