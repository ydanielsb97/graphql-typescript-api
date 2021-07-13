import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { getCustomRepository } from "typeorm";
import { CreateProductDto } from "../dto/createProduct.dto";
import { ProductsRepository } from "../repository/Products.repository";
import { Product } from "../entities/product";

@Resolver()
export class ProductResolver {
  constructor(private readonly _productsRepository: ProductsRepository) {}

  @Mutation(() => Boolean)
  async createProduct(
    @Arg("name") name: string,
    @Arg("quantity") quantity: number
  ) {
    await this._productsRepository.createProduct({ name, quantity });
    return true;
  }
}
