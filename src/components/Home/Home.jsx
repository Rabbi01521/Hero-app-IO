import { useLoaderData } from "react-router";
import Products from "../../pages/Products/Products";
import Banner from "../Banner/Banner";
import Counter from "../Counter/Counter";

const Home = () => {
    const appsData = useLoaderData();
    // console.log(appsData)
    return (
        <div className="">
            <Banner/>
            <Counter/>
            <Products appsData={appsData}/>
        </div>
    );
};

export default Home;