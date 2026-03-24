import { Outlet } from "react-router";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const Root = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;