import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Root = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
      <Header />
      {/* ✅ Simple Loader */}
      {isLoading ? (
        <div className="h-screen flex justify-center items-center bg-gray-400">
          <span className="loading loading-spinner loading-xl text-[#632ee3]"></span>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default Root;
