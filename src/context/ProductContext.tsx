import { instance } from "@/axios/config";
import { productReducer } from "@/reducers/productReducer";
import { produce } from "immer";
import { createContext, useReducer, useState } from "react";

export const ProductContext = createContext({} as any);
type ProductProviderProps = {
    children: React.ReactNode;
};

const ProductProvider = ({ children }: ProductProviderProps) => {
    const initialState = {
        products: [],
        isLoading: false,
        error: "",
    };


    const [state, dispatch] = useReducer(produce(productReducer), initialState);
    return (
        <ProductContext.Provider value={{ state, dispatch }}>
            {children}
        </ProductContext.Provider>

    )
}
export default ProductProvider;