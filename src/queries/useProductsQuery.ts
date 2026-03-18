import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../services/query";
import { fetchProductById, fetchProducts } from "../requests/products.request";

export function useProductsQuery() {
    return useQuery({
        queryKey: queryKeys.products,
        queryFn: fetchProducts,
    })
}

export function useProductsByDetailQuery(id: number) {
    return useQuery({
        queryKey:queryKeys.ProductDetail(id),
        queryFn: () => fetchProductById(id),
        enabled: !!id,
    })
}