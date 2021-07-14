import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { getConnection, getCustomRepository } from "typeorm";
import { CreateProductDto } from "../dto/createProduct.dto";
import { UpdateProductDto } from "../dto/updateProduct.dto";
import Product from "../entities/product";
import {ProductRepository} from "../repository/ProductRepository";

@Resolver()
export class ProductResolver {
  
  constructor(
    private readonly _productRepository: ProductRepository
  ){
    this._productRepository = getCustomRepository(ProductRepository);
  }

  

  @Query(() => [Product])
  async findAll(){
    return await this._productRepository.findAll();
  }

  @Query(() => Product)
  async findById(
    @Arg("id") id: number
  ) {
    return await this._productRepository.findById(id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg('product') product: CreateProductDto
  ) {
    const newProduct = await this._productRepository.createUser(product);

    return newProduct;
  }

  @Mutation(() => Product)
  async updateProduct(
    @Arg('id') id: number,
    @Arg('product') product: UpdateProductDto){
      return await this._productRepository.updateById(id, product)
    }

}
