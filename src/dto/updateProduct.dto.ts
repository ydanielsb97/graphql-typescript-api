import { Field, InputType, Int } from "type-graphql";

@InputType()
export class UpdateProductDto {
    @Field()
    name!: string;

    @Field(() => Int)
    quantity!: number;

}