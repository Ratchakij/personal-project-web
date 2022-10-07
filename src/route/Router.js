import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layout/auth/AuthLayout";
import LoginPage from "../Pages/LoginPage.js";
import Home from "../Pages/Home.js";
import Product from "../Pages/Product.js";
import About from "../Pages/About.js";

function Router() {
  const { user } = useAuth();
  return (
    <Routes>
      {user ? (
        <Route path="/" element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
        </Route>
      ) : (
        <>
          <Route path="/" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
}

export default Router;
