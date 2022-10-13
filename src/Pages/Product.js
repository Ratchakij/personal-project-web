import { useProduct } from "../context/ProductContext";
import { useLoading } from "../context/LoadingContext";
import { useState } from "react";
import Modal from "../components/ui/Modal";
import EditModal from "./EditModal";

function Product(props) {
  const [openEditMenu, setOpenEditMenu] = useState(false);

  const { startLoading, stopLoading } = useLoading();
  const { product } = props;
  const { deleteProducts } = useProduct();

  const handleClickDelete = async (e) => {
    e.preventDefault();

    try {
      startLoading();
      await deleteProducts(product.id);
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  // const openMenu = () => {
  //   setOpenEditMenu((prev) => !prev);
  // };

  return (
    <div className="overflow-hidden rounded-2xl bg-gray-50">
      <button
        class="p-1 pl-2 pr-2 bg-red-500 text-gray-100 text-lg rounded-lg  border-red-300"
        onClick={handleClickDelete}
      >
        Delete Menu
      </button>
      <div className="flex items-center h-[250px] overflow-hidden">
        <img
          className="small"
          src={product.productImage}
          alt={product.name}
        ></img>
      </div>
      <div className="p-6">
        <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
          <div>
            <p className="text-gray-400">Healthy Food </p>
            <h2 className="mt-2 text-lg font-semibold text-gray-800">
              {product.name}
            </h2>
            <span className="mt-2 text-lg font-semibold text-gray-800">
              Price {product.price} Bath
            </span>
          </div>
          <button
            className="mt-2 inline-block rounded-full bg-orange-400 p-2 text-xl font-medium text-white"
            onClick={() => setOpenEditMenu(true)}
          >
            Edit Menu
          </button>
        </div>
        <Modal
          title="Update Menu"
          open={openEditMenu}
          onClose={() => setOpenEditMenu(false)}
        >
          <EditModal
            onSuccess={() => setOpenEditMenu(false)}
            product={product}
          />
        </Modal>
        {/* {openEditMenu ? <EditModal product={product} /> : ""} */}
      </div>
    </div>
  );
}

export default Product;
