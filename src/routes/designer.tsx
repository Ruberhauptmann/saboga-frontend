import type { components } from "../apischema";
import {
  Link,
  useLoaderData,
} from "react-router-dom";

type Designer = components["schemas"]["DesignerWithBoardgames"];

function Designer() {
  const designer = useLoaderData() as Designer;

  return (
    <div>
      <title>{designer.name}</title>

      <h1 className="text-3xl">
        {designer.name}{" "}
      </h1>

      Games:
      {designer.boardgames!.map((game) => (
          <Link to={`/boardgame/${game.bgg_id}`}><h1 className="text-3xl">{game.name}</h1></Link>
      ))}
    </div>
  );
}

export default Designer;
