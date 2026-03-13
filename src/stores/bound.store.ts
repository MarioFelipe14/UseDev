import { create } from "zustand";
import { createCartSlice, type CartSlice } from "./slices/cart.slice";
import { createJSONStorage, devtools, persist } from "zustand/middleware";


type BoundStore = CartSlice;

const storageChannel = typeof window !== "undefined" 
? new BroadcastChannel("bound-store") 
:null;

export const useBoundStore = create<BoundStore>()(devtools(
    persist(
        (...rest) => ({
    ...createCartSlice(...rest),
}),
{
    name: "bound-store",
    storage: createJSONStorage(() => localStorage),
    partialize: (state) => {
        const {items}= state;
        return {items};
    },
}
),
{name: "Bound Store",}
))

if(storageChannel)  {
    storageChannel.onmessage = (event) => {
        if (event.data.type === "STORAGE_UPDATE") {
           const persistentState= localStorage.getItem("bound-store");
           if(persistentState){
            const parsed = JSON.parse(persistentState);
            useBoundStore.setState(parsed);
           }
        }
    }

    useBoundStore.subscribe((state) => {
        const seriazableState ={
            items: state.items,
        };
        storageChannel.postMessage({type: "STORAGE_UPDATE",state: seriazableState});
    })
};