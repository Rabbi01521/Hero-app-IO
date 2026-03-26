import { Link } from "react-router";
import notFound from "../../assets/App-Error.png";

const AppNotFound = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={notFound} alt="" />
          <h1 className="lg:text-5xl text-3xl font-bold mt-8">OPPS!! APP NOT FOUND</h1>
          <p className="py-6">
            The App you are requesting is not found on our system. please try
            another apps
          </p>
          <Link to='/apps' className="btn btn-primary">Go Back</Link>
        </div>
      </div>
    </div>
  );
};

export default AppNotFound;
