import { Outlet, useNavigation } from "react-router";
import { ToastContainer } from "react-toastify";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loader from "../../components/Loader/Loader";

const Root = () => {
  const navigation = useNavigation();

  const isLoading = navigation.state === "loading";

  return (
    <div>
      {isLoading ? (
        <Loader/>
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
        </>
      )}
      <ToastContainer />
    </div>
  );
};

export default Root;
