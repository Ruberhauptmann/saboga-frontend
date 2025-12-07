import type { components } from "../apischema";
import {
  Link,
  useLoaderData,
} from "react-router-dom";

type Family = components["schemas"]["FamilyWithBoardgames"];

function Family() {
  const family = useLoaderData() as Family;

  return (
    <div>
      <title>{family.name}</title>

      <h1 className="text-3xl">
        {family.name}{" "}
      </h1>

      Games:
      {family.boardgames!.map((game) => (
          <Link to={`/boardgame/${game.bgg_id}`}><h1 className="text-3xl">{game.name}</h1></Link>
      ))}

    </div>
  );
}

export default Family;
