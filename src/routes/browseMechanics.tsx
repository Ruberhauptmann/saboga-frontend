import type { components } from "../apischema";
import { Link, useLoaderData } from "react-router-dom";

type Mechanic = components["schemas"]["Mechanic"];

function BrowseMechanics() {
  const mechanics = useLoaderData() as Mechanic[];

  return (
    <div>
      {mechanics!.map((mechanic) => (
          <Link to={`/mechanic/${mechanic.bgg_id}`}><h1 className="text-3xl">{mechanic.name}</h1></Link>
      ))}
    </div>
  );
}

export default BrowseMechanics;
