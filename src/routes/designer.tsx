import type { components } from "../apischema";
import {
  useLoaderData,
} from "react-router-dom";

type Designer = components["schemas"]["Designer"];

function Designer() {
  const designer = useLoaderData() as Designer;

  return (
    <div>
      <title>{designer.name}</title>

      <h1 className="text-3xl">
        {designer.name}{" "}
      </h1>


    </div>
  );
}

export default Designer;
