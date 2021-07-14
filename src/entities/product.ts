import {  Entity,  Column,PrimaryGeneratedColumn,  CreateDateColumn, BaseEntity } from "typeorm";
import { Field, ObjectType } from "type-graphql";

@ObjectType()
@Entity("products")
export default class Product {

  @Field()
  @PrimaryGeneratedColumn()
  id!: number;

  @Field()
  @Column()
  name!: string;

  @Field()
  @Column("int", { default: 0 })
  quantity!: number;

  @Field(() => String)
  @CreateDateColumn()
  createdAt!: Date;
}
