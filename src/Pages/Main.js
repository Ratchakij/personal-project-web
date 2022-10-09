import { useProduct } from "../context/ProductContext";
import Product from "./Product";

function Main() {
  // const { onAdd } = props;
  const { products } = useProduct();
  return (
    <div className="grid gap-2 grid-cols-3 grid-rows-3 ">
      {products.map((product) => (
        <Product key={product.id} product={product}></Product>
      ))}
    </div>
  );
}

export default Main;
