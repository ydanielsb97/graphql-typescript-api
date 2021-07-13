import { EntityRepository, Repository } from "typeorm";
import { CreateProductDto } from "../dto/createProduct.dto";
import { Product } from "../entities/product";

@EntityRepository(Product)
export class ProductsRepository extends Repository<Product> {
  async createProduct(CreateProductDto: CreateProductDto) {
    const product = this.create(CreateProductDto);

    return await this.save(product);
  }
}
