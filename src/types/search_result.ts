
import type { components } from "../apischema";

type Boardgame = components["schemas"]["BoardgameList"];
type Category = components["schemas"]["CategoryList"];

export type SearchResult = 
  | { type: 'boardgame'; data: Boardgame }
  | { type: 'category'; data: Category };