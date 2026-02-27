export type ShoppingCenter = {
    id: number;
    name: string;
    clientId: number;
    createdAt: Date;
    updatedAt?: string;
}

export interface CreateShoppingCenterDTO {
    name: string;
    clientId: number;
}