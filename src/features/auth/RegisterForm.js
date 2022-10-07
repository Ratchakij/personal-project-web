import { useState } from "react";
import { validateRegister } from "../../validations/userValidate";
import { toast } from "react-toastify";
import { useAuth } from "../../context/AuthContext";
import { useLoading } from "../../context/LoadingContext";

function RegisterForm({ onSuccess }) {
  const { register } = useAuth();
  const { startLoading, stopLoading } = useLoading();

  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
    confirmPassword: "",
  });

  const handleChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value }); // set ค่า value ของ state ให้มีค่าเป็น object
  };

  const handleSubmitForm = async (e) => {
    e.preventDefault(); // e.preventDefault() ถูกใช้เพื่อไม่ให้ browser reload หรือ refresh

    const { error } = validateRegister(input);

    if (error) {
      return toast.error(error.message);
    }

    try {
      startLoading();
      await register(input);
      toast.success("success register");
      onSuccess();
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    } finally {
      stopLoading();
    }
  };

  return (
    <div>
      <form className="row gx-2 gy-3" onSubmit={handleSubmitForm}>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="First name"
            name="firstName"
            value={input.firstName}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-6">
          <input
            className="form-control"
            type="text"
            placeholder="Last name"
            name="lastName"
            value={input.lastName}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-12">
          <input
            className="form-control"
            type="text"
            placeholder="Email Address"
            name="email"
            value={input.email}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-12">
          <input
            className="form-control"
            type="text"
            placeholder="Mobile Number"
            name="mobile"
            value={input.mobile}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-12">
          <input
            className="form-control"
            type="text"
            placeholder="New password"
            name="password"
            value={input.password}
            onChange={handleChangeInput}
          />
        </div>
        <div className="col-12">
          <input
            className="form-control"
            type="text"
            placeholder="Confirm password"
            name="confirmPassword"
            value={input.confirmPassword}
            onChange={handleChangeInput}
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn d-flex justify-content-center align-items-center btn-green text-4.5 h-9 tw-px-10"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
