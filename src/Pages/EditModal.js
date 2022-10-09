import { useState } from "react";
import { toast } from "react-toastify";
import { useProduct } from "../context/ProductContext";
import { useLoading } from "../context/LoadingContext";

function EditModal({ product }) {
  const { name, price, quantity, productImage, id } = product;
  const { updateProducts } = useProduct();
  const { startLoading, stopLoading } = useLoading();
  const [input, setInput] = useState({
    name: name,
    price: price,
    quantity: quantity,
  });
  const [file, setFile] = useState(null);

  const formData = new FormData();
  formData.append("productImage", file);
  formData.append("name", input.name);
  formData.append("price", input.price);
  formData.append("quantity", input.quantity);

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); // set ค่า value ของ state ให้มีค่าเป็น object
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // e.preventDefault() ถูกใช้เพื่อไม่ให้ browser reload หรือ refresh
    try {
      startLoading();
      await updateProducts(id, formData);
      toast.success("success update");
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div className="flex flex-col h-[40rem] w-[30rem] gap-4 align-items-center overflow-hidden rounded-2xl bg-gray-50  ">
      <span className="text-lg font-semibold text-gray-800">Update Menu</span>
      <form
        className=" row flex justify-center gx-2 gy-3 "
        onSubmit={handleSubmitForm}
      >
        <img
          className="w-[10rem] h-[10rem]"
          src={productImage}
          alt=""
          onSubmit={handleSubmitForm}
        />
        <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        <div className=" row flex justify-center">
          <label
            htmlFor="product-name"
            className="text-sm font-medium text-gray-700"
          >
            Product Name
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Product Name"
            name="name"
            value={input.name}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="product-price"
            className=" text-sm font-medium text-gray-700"
          >
            Product Price
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Product Price"
            name="price"
            value={input.price}
            onChange={handleChangeInput}
          />
          <label
            htmlFor="product-quantity"
            className=" text-sm font-medium text-gray-700"
          >
            Product Quantity
          </label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            placeholder="Product Quantity"
            name="quantity"
            value={input.quantity}
            onChange={handleChangeInput}
          />
        </div>
        {/* <span className="mt-2 text-lg font-semibold text-gray-800">
          <input
          type="text"
          className="form-control rounded-md h-10"
          placeholder="Password"
          name="password"
          />
        </span> */}
        <button
          className="mt-2 w-[12rem] flex items-center justify-content-center rounded-full bg-green-400 p-2 text-xl  font-medium text-black"
          type="submit"
        >
          Edit
        </button>
      </form>
    </div>
  );
}

export default EditModal;
