import Product from "./Product";

function Main(props) {
  const { products, onAdd } = props;
  return (
    <div className="grid gap-2 grid-cols-3 grid-rows-3 ">
      {products.map((product) => (
        <Product key={product.id} product={product} onAdd={onAdd}></Product>
      ))}
    </div>
  );
}

export default Main;
