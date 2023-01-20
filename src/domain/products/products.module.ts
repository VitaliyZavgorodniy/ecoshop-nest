import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { ProductsController } from 'domain/products/products.controller';
import { ProductsService } from 'domain/products/products.service';
import { CategoriesModule } from 'domain/categories/categories.module';

import { Product } from 'domain/products/models/products.model';
import { ProductsCategories } from 'domain/products/models/products-categories.model';
import { Category } from 'domain/categories/models/categories.model';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService],
  imports: [
    SequelizeModule.forFeature([Product, Category, ProductsCategories]),
    CategoriesModule,
  ],
})
export class ProductsModule {}
