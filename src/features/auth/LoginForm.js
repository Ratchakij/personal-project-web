import { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useLoading } from "../../context/LoadingContext";

function LoginForm() {
  const { login } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); // set ค่า value ของ state ให้มีค่าเป็น object
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      startLoading();
      await login(input);
      toast.success("success login");
    } catch (err) {
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded-md h-13"
          placeholder="Email address or phone number"
          // ถ้า input ไม่ใส่ arttributes name จะกดพิมพ์ในช่องไม่ได้
          name="email"
          value={input.email}
          onChange={handleChangeInput}
        />
      </div>
      <div className="mb-3">
        <input
          type="text"
          className="form-control rounded-md h-13"
          placeholder="Password"
          name="password"
          value={input.password}
          onChange={handleChangeInput}
        />
      </div>
      <div className="mb-2 d-grid">
        <button className="btn btn-primary fw-bold rounded-md h-12 text-4.5">
          Log In
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
