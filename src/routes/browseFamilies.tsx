import type { components } from "../apischema";
import { Link, useLoaderData } from "react-router-dom";

type Family = components["schemas"]["Family"];

function BrowseFamilies() {
  const families = useLoaderData() as Family[];

  return (
    <div>
      {families!.map((family) => (
          <Link to={`/family/${family.bgg_id}`}><h1 className="text-3xl">{family.name}</h1></Link>
      ))}
    </div>
  );
}

export default BrowseFamilies;
