import { useAuth } from "../../context/AuthContext";

function Logout() {
  const { logout } = useAuth();
  return (
    <button
      className="dropdown-item p-2 d-flex align-items-center gap-3 hover-bg-neutral-100 hover-rounded-lg"
      onClick={logout}
    >
      <i className="fas fa-sign-out-alt rounded-circle p-2 text-black text-5 bg-gray-300" />
      <small>Log Out</small>
    </button>
  );
}

export default Logout;
