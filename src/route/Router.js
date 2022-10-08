import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layout/auth/AuthLayout";
import LoginPage from "../Pages/LoginPage.js";
import Home from "../Pages/Home.js";
import Product from "../Pages/Product.js";
import CartItem from "../Pages/CartItem.js";

function Router() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/cartItem" element={<CartItem />} />
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
        </Routes>
      )}
    </>
  );
}

export default Router;
