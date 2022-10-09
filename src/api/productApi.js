import axios from "../config/axios";

export const createProducts = (input) => axios.post("/product", input);
export const getAllProducts = () => axios.get("/product");
export const updateProducts = (id, input) =>
  axios.patch(`/product/${id}`, input);
export const deleteProducts = (id) => axios.delete(`/product/${id}`);
