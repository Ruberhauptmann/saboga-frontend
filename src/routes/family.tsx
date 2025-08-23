import type { components } from "../apischema";
import {
  useLoaderData,
} from "react-router-dom";

type Family = components["schemas"]["Family"];

function Family() {
  const family = useLoaderData() as Family;

  return (
    <div>
      <title>{family.name}</title>

      <h1 className="text-3xl">
        {family.name}{" "}
      </h1>


    </div>
  );
}

export default Family;
