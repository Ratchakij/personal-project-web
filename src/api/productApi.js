import axios from "../config/axios";

export const getAllProducts = () => axios.get("/product");
export const createProducts = (input) => axios.post("/product", input);
export const deleteProducts = (input) => axios.delete("/product", input);
