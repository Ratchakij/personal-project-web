import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layout/auth/AuthLayout";
import LoginPage from "../Pages/LoginPage.js";
import Home from "../Pages/Home.js";
import About from "../Pages/About";

function Router() {
  const { user } = useAuth();
  return (
    <>
      {user ? (
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </Routes>
      )}
    </>
  );
}
export default Router;
