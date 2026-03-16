import type { Product } from "../common/types/product"
import { api } from "../services/api"

export async function fetchProducts(): Promise<Product[]> {
  const { data } = await api.get<Product[]>('/products')
  return data
}

export async function fetchProductById(id: string | number): Promise<Product> {
  const { data } = await api.get<Product>(`/products/${id}`)
  return data
}

export async function createProduct(product: Product): Promise<Product> {
  const { data } = await api.post<Product>('/products', product);
  return data;
}
