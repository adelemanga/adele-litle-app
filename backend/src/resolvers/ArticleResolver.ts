import { Food } from "../entities/Food";
import { Article } from "../entities/Article";
import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";

@InputType()
class NewArticleInput {
  @Field()
  availability: boolean;

  @Field(() => String)
  foodId: number;
}

@InputType()
class EditArticleInput {
  @Field()
  availability: boolean;
}

@Resolver(Article)
class ArticleResolver {
  @Query(() => [Article])
  async getAllArticles() {
    const article = await Article.find({ relations: { food: true } });
    return article;
  }

  @Mutation(() => Article)
  async createNewArticle(@Arg("data") newArticleData: NewArticleInput) {
    const food = await Food.findOne({
      where: { id: Number(newArticleData.foodId) },
    });
    if (!food) {
      throw new Error("Food not found");
    }

    const newArticle = Article.create({
      availability: newArticleData.availability,
      food: food,
    });

    await newArticle.save();
    return newArticle;
  }

  @Mutation(() => Article)
  async editArticle(
    @Arg("article") articleId: string,
    @Arg("data") newArticleData: EditArticleInput
  ) {
    const article = await Article.findOneByOrFail({
      id: Number.parseInt(articleId),
    });

    article.availability = newArticleData.availability;
    const updatedArticle = await article.save();
    return updatedArticle;
  }

  @Mutation(() => String)
  async deleteArticle(@Arg("id") idToDelete: string) {
    await Article.delete(idToDelete);
    return `Food deleted successfully`;
  }
}

export default ArticleResolver;
