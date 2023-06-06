import { PrismaClient, type Prisma } from "@prisma/client";

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
      const items = await prisma.brands.findMany();
      return items as unknown as T[];
    }
  }

  async createItem(itemData: T): Promise<T> {}

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
