import "./Home.css";

import Basket from "./Basket";
import Main from "./Main";
import data from "../data/data";
import { useState } from "react";
import { Carousel } from "flowbite-react";

function Home() {
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;

  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);

    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  return (
    <div className="bg-[url('/public/images/popular-bg.jpg')] bg-cover bg-center bg-fixed">
      <div className="container w-[100vh] h-[50vh]">
        <Carousel slideInterval={3000}>
          <img src="./images/about-img.jpg" alt="..." />
          <img src="./images/img2.jpg" alt="..." />
          <img src="./images/product-2.jpg" alt="..." />
        </Carousel>
      </div>
      <div className="flex justify-center ">
        <Main products={products} onAdd={onAdd} />
        <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
      </div>
    </div>
  );
}

export default Home;
