import { PrismaClient, type Prisma } from "@prisma/client";

const prisma = new PrismaClient();

class BaseService<T> {
  private readonly model: Prisma.ModelName;

  constructor(model: Prisma.ModelName) {
    this.model = model;
  }

  async getItem(id: number): Promise<T> {}

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

  async deleteItem(id: number): Promise<void> {}
}

export default BaseService;
