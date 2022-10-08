// function Product(props) {
//   const { product, onAdd } = props;
//   return (
//     <div className="flex flex-col items-center ">
//       <img className="small" src={product.image} alt={product.name}></img>
//       <h3>{product.name}</h3>
//       <p>${product.price}</p>
//       <button className="button" onClick={() => onAdd(product)}>
//         Add To Cart
//       </button>
//     </div>
//   );
// }

// export default Product;

function Product(props) {
  const { product, onAdd } = props;
  return (
    <div class="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[250px] overflow-hidden">
        <img className="small" src={product.image} alt={product.name}></img>
      </div>
      <div class="p-6">
        <div class="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <p class="text-gray-400">Healthy Food </p>
            <h2 class="mt-2 text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <span class="mt-2 text-lg font-semibold text-gray-800">
              Price {product.price} Bath
            </span>
          </div>
          <button
            className="mt-2 inline-block rounded-full bg-orange-400 p-3 text-sm font-medium text-white"
            onClick={() => onAdd(product)}
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
