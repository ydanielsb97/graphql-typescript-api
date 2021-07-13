import { Field, InputType, Int } from "type-graphql";

@InputType()
export class CreateProductDto {
  @Field(() => String)
  name!: string;
  @Field(() => Int)
  quantity!: number;
}
