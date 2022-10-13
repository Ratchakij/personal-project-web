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
    await productService.createProducts(input);
    const res = await productService.getAllProducts();
    setProduct(res.data.product);
  };

  const updateProducts = async (id, input) => {
    await productService.updateProducts(id, input);
    const res = await productService.getAllProducts();
    setProduct(res.data.product);
  };

  const deleteProducts = async (id) => {
    await productService.deleteProducts(id);
    const res = await productService.getAllProducts();
    setProduct(res.data.product);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        createProducts,
        updateProducts,
        deleteProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};

export default ProductContextProvider;
