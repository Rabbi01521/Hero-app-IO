import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Root = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
