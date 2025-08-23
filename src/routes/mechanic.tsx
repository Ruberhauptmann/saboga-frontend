import type { components } from "../apischema";
import {
  useLoaderData,
} from "react-router-dom";

type Mechanic = components["schemas"]["Mechanic"];

function Mechanic() {
  const mechanic = useLoaderData() as Mechanic;

  return (
    <div>
      <title>{mechanic.name}</title>

      <h1 className="text-3xl">
        {mechanic.name}{" "}
      </h1>


    </div>
  );
}

export default Mechanic;
