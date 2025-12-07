import type { components } from "../apischema";
import { Link, useLoaderData } from "react-router-dom";

type Category = components["schemas"]["Category"];

function BrowseCategories() {
  const categories = useLoaderData() as Category[];

  return (
    <div>
      {categories!.map((category) => (
          <Link to={`/category/${category.bgg_id}`}><h1 className="text-3xl">{category.name}</h1></Link>
      ))}
    </div>
  );
}

export default BrowseCategories;
