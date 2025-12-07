import type { components } from "../apischema";
import {
  Link,
  useLoaderData,
} from "react-router-dom";

type Designer = components["schemas"]["Designer"];

function BrowseDesigners() {
  const designers = useLoaderData() as Designer[];

  return (
    <div>
      {designers!.map((designer) => (
        <h1 className="text-3xl">
          <Link to={`/designer/${designer.bgg_id}`}><h1 className="text-3xl">{designer.name}</h1></Link>
        </h1>
      ))}
    </div>
  );
}

export default BrowseDesigners;
