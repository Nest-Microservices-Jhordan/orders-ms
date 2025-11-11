import { OrderStatus } from "generated/prisma";

export interface IOrderWithProducts {
  id: string;
  totalAmount: number;
  totalItems: number;
  status: OrderStatus;
  paid: boolean;
  paidAt: Date | null;
  createdAt: Date;
  updatedAt: Date;
  OrderItem: {
    productId: number;
    name: string;
    price: number;
    quantity: number;
  }[];
}
