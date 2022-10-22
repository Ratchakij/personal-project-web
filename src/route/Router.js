import { Route, Routes } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthLayout from "../layout/auth/AuthLayout";
import LoginPage from "../Pages/LoginPage.js";
import Home from "../Pages/Home.js";
import About from "../Pages/About";

function Router() {
  const { user } = useAuth();

  // console.log(user);
  return (
    <Routes>
      {user ? (
        user.role === "ADMIN" ? (
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        ) : (
          <Route path="/" element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="*" element={<Navigate to="/" />} /> */}
          </Route>
        )
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          {/* <Route path="*" element={<Navigate to="/" />} /> */}
        </>
      )}
    </Routes>
  );
}
export default Router;
