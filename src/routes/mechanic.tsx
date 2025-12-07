import type { components } from "../apischema";
import {
  Link,
  useLoaderData,
} from "react-router-dom";

type Mechanic = components["schemas"]["MechanicWithBoardgames"];

function Mechanic() {
  const mechanic = useLoaderData() as Mechanic;

  return (
    <div>
      <title>{mechanic.name}</title>

      <h1 className="text-3xl">
        {mechanic.name}{" "}
      </h1>

      Games:
      {mechanic.boardgames!.map((game) => (
          <Link to={`/boardgame/${game.bgg_id}`}><h1 className="text-3xl">{game.name}</h1></Link>
      ))}
    </div>
  );
}

export default Mechanic;
