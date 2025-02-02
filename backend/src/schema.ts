import { buildSchema } from "type-graphql";
import FoodResolver from "./resolvers/FoodResolver";
import ArticleResolver from "./resolvers/ArticleResolver";

export default buildSchema({
  resolvers: [FoodResolver, ArticleResolver],
});


