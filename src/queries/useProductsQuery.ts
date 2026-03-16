import { useQuery } from "@tanstack/react-query";
import { queryKeys } from "../services/query";
import { fetchProducts } from "../requests/products.request";

export function useProductsQuery() {
    return useQuery({
        queryKey: queryKeys.products,
        queryFn: fetchProducts,
    })
}