export interface CreateProductRequest
{
  categoryId: number;
  name: string;
  price: number;
  stockQuantity: number;
  image?: File;
}

export interface ReturnProductRequest {
  categoryId: string;
}

export interface GetProductResponse {
  productId: number;
  categoryId: string;
  categoryName: string;
  name: string;
  price: number;
  stockQuantity: number;
  imageUrl: string;
}

export interface CartItem {
  productId: number,
  name: string,
  price: number,
  image: string,
  quantity: number
}
