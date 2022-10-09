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

  const createProducts = async (input) => {
    return await productService.createProducts(input);
  };

  const updateProducts = async (id, input) => {
    return await productService.updateProducts(id, input);
  };

  const deleteProducts = async (id) => {
    return await productService.deleteProducts(id);
  };

  return (
    <ProductContext.Provider
      value={{ products, createProducts, updateProducts, deleteProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
