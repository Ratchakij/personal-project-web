import { createContext, useContext, useEffect, useState } from "react";
import * as productService from "../api/productApi";

const ProductContext = createContext();

function ProductContextProvider({ children }) {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await productService.getAllProducts();
      setProduct(res.data.product);
    };
    fetchProduct();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
