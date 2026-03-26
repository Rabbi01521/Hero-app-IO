import { FaArrowTrendUp } from "react-icons/fa6";
import { Link } from "react-router";
import appotFound from "../../assets/App-Error.png";
import Loader from "../../components/Loader/Loader";

const Products = ({ appsData }) => {
  // console.log(appsData);

  return (
    <div className="py-16">
      <div className="max-w-[1200px] mx-auto">
        <div className="lg:w-lg mx-auto mb-10">
          <h3 className="flex items-center justify-center gap-3 text-4xl font-bold">
            <span className="font-black">Trending Apps</span> <FaArrowTrendUp className="text-[#632EE3]" />
          </h3>
          <p className="text-center py-2">
            Explore All Trending Apps on the Market developed by us
          </p>
        </div>
      </div>
      {appsData.length > 0 ? (
        <div>
          <div className="max-w-[1200px] mx-auto">
            <div className="grid lg:grid-cols-4 md:grid-cols-3 gap-5">
              {appsData?.slice(0, 8).map((app) => (
                // console.log(app),
                <Link to={`/apps/${app.id}`} key={app.id}>
                  <div className="card shadow-lg cursor-pointer  bg-white hover:bg-base-200 hover:-translate-y-2 transition-all duration-200 gap-4">
                    <div className="card-body">
                      <div className="lg:w-full w-2/3 mx-auto">
                        <img
                          className=" lg:h-full lg:w-full lg:object-cover rounded-2xl"
                          src={app.image ? app.image : appotFound}
                          alt=""
                        />
                      </div>
                      <ul className="mt-6 flex flex-col gap-2 text-md text-left">
                        <h2 className="font-bold text-center ">{app.title}</h2>
                      </ul>
                      <div className="flex justify-between mt-5">
                        <div className="badge badge-soft badge-success ">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill="none"
                              strokeWidth="2"
                              d="M1,17 L1,23 L23,23 L23,17 M12,2 L12,19 M5,12 L12,19 L19,12"
                            ></path>
                          </svg>{" "}
                          {app.downloads}
                        </div>
                        <div className="badge badge-soft badge-secondary">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 576 512"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path>
                          </svg>{" "}
                          {app.rating}
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div className="text-center mt-10">
            <Link
              className="btn btn-wide  text-white hover:shadow-xl bg-gradient-to-tl to-[#632EE3] from-[#9F62F2] "
              to="/apps"
            >
              Explore All Apps
            </Link>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Products;
