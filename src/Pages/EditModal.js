import { useState, useRef } from "react";
import { toast } from "react-toastify";
import { useProduct } from "../context/ProductContext";
import { useLoading } from "../context/LoadingContext";

function EditModal({ onSuccess, product }) {
  const { name, price, quantity, productImage, id } = product;
  const { updateProducts } = useProduct();
  const { startLoading, stopLoading } = useLoading();
  const [input, setInput] = useState({
    name: name,
    price: price,
    quantity: quantity,
  });

  const [file, setFile] = useState(null);

  const inputEl = useRef();

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
      onSuccess();
      window.location.reload();
    } catch (err) {
      console.log(err);
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <input
        type="file"
        className="d-none"
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files[0]) {
            setFile(e.target.files[0]);
          }
        }}
      />

      <form
        className="row d-flex justify-content-center "
        onSubmit={handleSubmitForm}
      >
        <img
          className="h-[20rem] w-[30rem] cursor-pointer"
          src={file ? URL.createObjectURL(file) : productImage}
          alt=""
          onClick={() => inputEl.current.click()}
        />

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

        <button
          className="mt-2 w-[12rem] flex items-center justify-content-center rounded-full bg-green-400 p-2 text-xl  font-medium text-black"
          type="submit"
        >
          UPDATE
        </button>
      </form>
    </div>
  );
}

export default EditModal;
