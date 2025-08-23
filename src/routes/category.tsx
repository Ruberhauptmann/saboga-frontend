import type { components } from "../apischema";
import {
  useLoaderData,
} from "react-router-dom";

type Category = components["schemas"]["Category"];

function Category() {
  const category = useLoaderData() as Category;

  return (
    <div>
      <title>{category.name}</title>

      <h1 className="text-3xl">
        {category.name}{" "}
      </h1>


    </div>
  );
}

export default Category;
