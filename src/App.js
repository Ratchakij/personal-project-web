import "./App.css";

import Router from "./route/Router"; // CONFIG Route ส่วน front
import { ToastContainer, Zoom } from "react-toastify";
import { useLoading } from "./context/LoadingContext";
import Spinner from "./components/ui/Spinner";

function App() {
  const { loading } = useLoading();

  return (
    <>
      {loading && <Spinner />}
      <Router />;
      <ToastContainer
        autoClose="2500"
        theme="colored"
        transition={Zoom}
        position="bottom-center"
      />
      {/* react toastify จะ alert message เป็นลักษณะกล่องข้อความขึ้นมา */}
    </>
  );
}

export default App;
