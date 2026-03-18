import { QueryClient } from "@tanstack/react-query";


export const queryKeys = {
        products: ['products'],
        ProductDetail: (id: number) => ["products","detail", id],
        categories: ['categories'],
}

export const queryClient= new QueryClient({
    defaultOptions:{
        queries:{
            staleTime: 60 * 5 * 1000, 
            gcTime: 60 * 10 * 1000,
            refetchOnWindowFocus: true,
            retry:1,
            retryDelay:(attemptIndex) => Math.min(1000 * 2 ** attemptIndex, 30000), 
        }
    }
})