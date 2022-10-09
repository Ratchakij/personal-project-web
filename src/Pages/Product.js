function Product(props) {
  const { product, onAdd } = props;

  return (
    <div class="overflow-hidden rounded-2xl bg-gray-50">
      <div className="flex items-center h-[250px] overflow-hidden">
        <img
          className="small"
          src={product.productImage}
          alt={product.name}
        ></img>
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
            Edit Menu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
