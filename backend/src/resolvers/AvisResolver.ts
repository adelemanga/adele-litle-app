import {
  Arg,
  Authorized,
  Field,
  InputType,
  Int,
  Mutation,
  Query,
  Resolver,
} from "type-graphql";
import { db } from "../db";
import { Avis } from "../entities/Avis";

@InputType()
class NewAvisInput implements Partial<Avis> {
  @Field()
  name: string;

  @Field()
  lastname: string;

  @Field()
  message: string;

  @Field()
  rating: number;

  @Field()
  title: string;
}

@Resolver(Avis)
class AvisResolver {
  @Query(() => [Avis])
  async getAllAvis() {
    const avis = await Avis.find();
    return avis;
  }

  @Mutation(() => Avis)
  async addAvis(
    @Arg("name") name: string,
    @Arg("lastname") lastname: string,
    @Arg("message") message: string,
    @Arg("rating", () => Int) rating: number,
    @Arg("title") title: string
  ): Promise<Avis> {
    const avi = Avis.create({ name, lastname, message, rating, title });
    await avi.save();
    return avi;
  }

  @Query(() => [Avis])
  async avis() {
    return await db.getRepository(Avis).find();
  }

  @Mutation(() => Avis)
  async createNewAvis(@Arg("data") newAviData: NewAvisInput) {
    const resultFromSave = await Avis.save({
      ...newAviData,
    });

    return resultFromSave;
  }

  @Query(() => Avis)
  async getOneAviById(@Arg("aviId") aviId: string) {
    const avi = await Avis.findOne({});
    return avi;
  }
}

export default AvisResolver;
