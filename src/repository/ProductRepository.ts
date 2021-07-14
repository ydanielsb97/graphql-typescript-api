import {EntityRepository, Repository} from 'typeorm'
import { CreateProductDto } from '../dto/createProduct.dto';
import { UpdateProductDto } from '../dto/updateProduct.dto';
import Product from "../entities/product.entity";

@EntityRepository(Product)
export class ProductRepository extends Repository<Product>{
 
    async createUser(createProductDto: CreateProductDto): Promise<Product>{
        const product = this.create(createProductDto);

        return await this.save(product);
    }

    async findAll(): Promise<Product[]>{
        return await this.find();
    }

    async findById(id: number): Promise<Product | undefined>{
        return await this.findOne(id);
    }
    
    async updateById(id: number, updateProductDto: UpdateProductDto): Promise<Product>{
        return await this.save(updateProductDto);
    }

    async deleteById(id: number): Promise<{}>{



        await this.delete(id)

        return {message: "eliminated"}
    }

    
}
