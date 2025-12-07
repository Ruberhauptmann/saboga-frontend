import type { components } from "../apischema";
import {
  Link,
  useLoaderData,
} from "react-router-dom";

type Category = components["schemas"]["CategoryWithBoardgames"];

function Category() {
  const category = useLoaderData() as Category;

  return (
    <div>
      <title>{category.name}</title>

      <h1 className="text-3xl">
        {category.name}{" "}
      </h1>

      Game:
      {category.boardgames!.map((game) => (
          <Link to={`/boardgame/${game.bgg_id}`}><h1 className="text-3xl">{game.name}</h1></Link>
      ))}
    </div>
  );
}

export default Category;
