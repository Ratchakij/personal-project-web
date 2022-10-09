import React, { useState } from "react";

function Basket() {
  const [file, setFile] = useState(null);

  return (
    <div class="flex flex-col align-items-center overflow-hidden rounded-2xl bg-gray-50">
      <img
        className="w-[10rem] h-[10rem]"
        src={file ? URL.createObjectURL(file) : ""}
        alt=""
      />
      <input type="file" onChange={(e) => setFile(e.target.files[0])} />

      <span class="mt-2 text-lg font-semibold text-gray-800">
        <input
          type="text"
          className="form-control rounded-md h-10"
          placeholder="Password"
          name="password"
        />
      </span>
      <button
        className="mt-2 flex items-center justify-content-center rounded-full bg-green-400 p-3 text-sm  font-medium text-black"
        onClick={() => {}}
      >
        Create Menu
      </button>
    </div>
  );
}

export default Basket;
