import { Field, ObjectType } from "type-graphql";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  ManyToOne,
} from "typeorm";

@ObjectType()
@Entity()
export class Avis extends BaseEntity {
  @Field()
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  lastname: string;

  @Field()
  @Column()
  message: string;

  @Field()
  @Column({ nullable: true })
  rating: number;

  @Field()
  @Column({ nullable: true })
  title: string;
}
