import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  OneToMany,
} from "typeorm";
import { Article } from "./Article";

@ObjectType()
@Entity()
export class Food extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  code: string;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  emoji: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column({
    default:
      "https://img.freepik.com/premium-vector/default-image-icon-vector-missing-picture-page-website-design-mobile-app-no-photo-available_87543-11093.jpg",
  })
  imgUrl: string;

  @Field()
  @Column()
  continent: string;

  @Field()
  @Column()
  price: string;

  @Field(() => [Article], { nullable: true })
  @OneToMany(() => Article, (article) => article.food)
  articles?: Article[];
}
