import { Link } from "react-router";
import error404 from "../../assets/error-404.png";

const ErrorPage = () => {
    return (
        <div className="hero  min-h-screen">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <img src={error404} alt="" />
          <h1 className="lg:text-5xl text-3xl font-bold mt-8">Oops, page not found!</h1>
          <p className="py-6">
            The page you are looking for is not available.
          </p>
          <Link to='/' className="btn btn-primary">Go Back</Link>
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;