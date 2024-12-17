import { useContext } from "react";
import {ProductContext} from '../context/productContext';

export const useProduct = () => {
    return useContext(ProductContext);
};

export default useProduct;