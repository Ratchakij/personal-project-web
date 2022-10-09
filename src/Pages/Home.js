import "./Home.css";

import { Carousel } from "flowbite-react";
import { useProduct } from "../context/ProductContext";

import Main from "../Pages/Main";
import AddMenu from "./AddMenu";

function Home() {
  const { products } = useProduct();

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
        <Main products={products} />
        {/* <Main products={products} onAdd={onAdd} /> */}
        <AddMenu />
        {/* <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} /> */}
      </div>
    </div>
  );
}

export default Home;

// const [cartItems, setCartItems] = useState([]);
// const onAdd = (products) => {
//   const exist = cartItems.find((x) => x.id === products.id);

//   if (exist) {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === products.id ? { ...exist, qty: exist.qty + 1 } : x
//       )
//     );
//   } else {
//     setCartItems([...cartItems, { ...products, qty: 1 }]);
//   }
// };

// const onRemove = (products) => {
//   const exist = cartItems.find((x) => x.id === products.id);
//   if (exist.qty === 1) {
//     setCartItems(cartItems.filter((x) => x.id !== products.id));
//   } else {
//     setCartItems(
//       cartItems.map((x) =>
//         x.id === products.id ? { ...exist, qty: exist.qty - 1 } : x
//       )
//     );
//   }
// };
