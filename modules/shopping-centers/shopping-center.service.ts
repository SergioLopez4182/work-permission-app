import { prisma } from '@/lib/prisma'
import { CreateShoppingCenterDTO, ShoppingCenter } from './shopping-center.types';

export class ShoppingCenterService {
  async create(
    data: CreateShoppingCenterDTO
  ): Promise<ShoppingCenter> {
    return prisma.shoppingCenter.create({
      data,
    });
  }

  async findAll(): Promise<ShoppingCenter[]> {
    return prisma.shoppingCenter.findMany();
  }

  async findById(id: number): Promise<ShoppingCenter | null> {
    return prisma.shoppingCenter.findUnique({
      where: { id },
    });
  }

  async update(
    id: number,
    data: Partial<CreateShoppingCenterDTO>
  ): Promise<ShoppingCenter> {
    return prisma.shoppingCenter.update({
      where: { id },
      data,
    });
  }

  async delete(id: number): Promise<ShoppingCenter> {
    return prisma.shoppingCenter.delete({
      where: { id },
    });
  }
}