import { PrismaClient, type Prisma } from "@prisma/client";
import { type Brands, type Products } from "../interfaces/interface";

const prisma = new PrismaClient();

class BaseService<T> {
  private readonly model: Prisma.ModelName;

  constructor(model: Prisma.ModelName) {
    this.model = model;
  }

  async getItem(ID: number): Promise<T> {
    if (this.model === "products") {
      const product = await prisma.products.findUnique({
        where: {
          ID
        },
        include: {
          brands: true
        }
      });
      return product as unknown as T;
    } else {
      const item = await prisma.brands.findUnique({
        where: {
          ID
        },
        include: {
          products: true
        }
      });
      return item as unknown as T;
    }
  }

  async getItems(): Promise<T[]> {
    if (this.model === "products") {
      const products = await prisma.products.findMany({
        include: {
          brands: true
        }
      });
      return products as unknown as T[];
    } else {
      const items = await prisma.brands.findMany({
        include: {
          products: true
        }
      });
      return items as unknown as T[];
    }
  }

  async createItem(itemData: T): Promise<T> {
    const data = itemData as Products | Brands;

    let createdItem;

    if (this.model === "products") {
      createdItem = await prisma.products.create({
        data: data as Products
      });
    } else {
      createdItem = await prisma.brands.create({
        data: data as Brands
      });
    }

    return createdItem;
  }

  async updateItem(id: number, itemData: T): Promise<T> {}

  async deleteItem(ID: number): Promise<void> {
    if (this.model === "products") {
      await prisma.products.delete({
        where: {
          ID
        }
      });
    } else {
      await prisma.brands.delete({
        where: {
          ID
        }
      });
    }
  }
}

export default BaseService;
